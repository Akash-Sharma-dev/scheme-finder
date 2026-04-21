import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
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
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
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
          <h1>Welcome Back</h1>
          <p>
            Login to continue and check the most relevant government schemes
            based on your profile, income, category and preferences.
          </p>

          <div className="sf-auth-points">
            <div className="sf-auth-point">✓ Secure login flow</div>
            <div className="sf-auth-point">✓ Protected scheme checker</div>
            <div className="sf-auth-point">✓ Fast personalized results</div>
          </div>
        </div>

        <div className="sf-auth-card">
          <h2>Login</h2>
          <p className="sf-auth-subtitle">Login to access scheme checker</p>

          {message && <div className="sf-auth-message">{message}</div>}

          <form onSubmit={handleSubmit} className="sf-auth-form">
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
              {loading ? "Please wait..." : "Login"}
            </button>
          </form>

          <p className="sf-auth-switch">
            New user? <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;