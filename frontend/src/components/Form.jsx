import { useState } from "react";

function Form({ setResults }) {
  const [formData, setFormData] = useState({
    income: "",
    category: "",
    state: "",
    gender: "",
    occupation: "",
    ageGroup: "",
    preference: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "income" ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const token = localStorage.getItem("schemeToken");

      const res = await fetch("http://localhost:5000/api/schemes/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      setResults(data.data || []);
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="sf-check-form" onSubmit={handleSubmit}>
      <div className="sf-grid">
        <div className="sf-field">
          <label>Income</label>
          <input
            type="number"
            name="income"
            placeholder="Enter your income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>

        <div className="sf-field">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="BPL">BPL</option>
            <option value="EWS">EWS</option>
            <option value="LIG">LIG</option>
          </select>
        </div>

        <div className="sf-field">
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="sf-field">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sf-field">
          <label>Occupation</label>
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          >
            <option value="">Select Occupation</option>
            <option value="Student">Student</option>
            <option value="Farmer">Farmer</option>
            <option value="Business">Business</option>
            <option value="Worker">Worker</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>

        <div className="sf-field">
          <label>Age Group</label>
          <select
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Age Group</option>
            <option value="Child">Child</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div className="sf-field sf-field-full">
          <label>Preference</label>
          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
          >
            <option value="">Select Preference</option>
            <option value="Financial">Financial</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Housing">Housing</option>
            <option value="Skill">Skill</option>
            <option value="Pension">Pension</option>
            <option value="Savings">Savings</option>
            <option value="Welfare">Welfare</option>
            <option value="Digital">Digital</option>
            <option value="Startup">Startup</option>
            <option value="Insurance">Insurance</option>
            <option value="Employment">Employment</option>
          </select>
        </div>
      </div>

      <button type="submit" className="sf-submit-btn" disabled={loading}>
        {loading ? "Checking..." : "Check Eligibility"}
      </button>

      {error && <p className="sf-error-text">{error}</p>}
    </form>
  );
}

export default Form;