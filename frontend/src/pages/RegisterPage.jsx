import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      login(data.user, data.token);
      navigate("/form");
    } catch (error) {
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sf-auth-page">
      <div className="sf-auth-shell">
        <div className="sf-auth-left">
          <div className="sf-auth-badge">Scheme Finder</div>
          <h1>Create Account</h1>
          <p>
            Register once and unlock a cleaner way to discover schemes that
            match your details and eligibility.
          </p>

          <div className="sf-auth-points">
            <div className="sf-auth-point">✓ Quick registration</div>
            <div className="sf-auth-point">✓ Smart scheme matching</div>
            <div className="sf-auth-point">✓ Smooth protected access</div>
          </div>
        </div>

        <div className="sf-auth-card">
          <h2>Register</h2>
          <p className="sf-auth-subtitle">
            Create account first to use Scheme Finder
          </p>

          {message && <div className="sf-auth-message">{message}</div>}

          <form onSubmit={handleSubmit} className="sf-auth-form">
            <div className="sf-auth-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sf-auth-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sf-auth-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="sf-auth-btn" type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Register"}
            </button>
          </form>

          <p className="sf-auth-switch">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;