import { useState } from "react";

function Form({ setResults }) {

  const [formData, setFormData] = useState({
    income: "",
    category: "",
    state: "",
    gender: "",
    occupation: "",
    ageGroup: "",
    preference: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    if (
      !formData.income ||
      !formData.category ||
      !formData.state ||
      !formData.gender ||
      !formData.occupation ||
      !formData.ageGroup
    ) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          income: Number(formData.income)
        })
      });

      const data = await res.json();

if (!data.success) {
  setError(data.message || "Server error");
  setResults([]);
  return;
}

setResults(data.data || []);

    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form">

      <div className="field">
        <label>Income</label>
        <input name="income" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Category</label>
        <select name="category" onChange={handleChange}>
          <option value="">Select</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="General">General</option>
        </select>
      </div>

      <div className="field">
        <label>State</label>
        <select name="state" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      <div className="field">
        <label>Gender</label>
        <select name="gender" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="field">
        <label>Occupation</label>
        <select name="occupation" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Student">Student</option>
          <option value="Farmer">Farmer</option>
        </select>
      </div>

      <div className="field">
        <label>Age Group</label>
        <select name="ageGroup" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Child">Child</option>
          <option value="Adult">Adult</option>
        </select>
      </div>

      <div className="field">
        <label>Preference</label>
        <select name="preference" onChange={handleChange}>
          <option value="">Optional</option>
          <option value="education">Education</option>
          <option value="financial">Financial</option>
        </select>
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Find Schemes"}
      </button>

      {error && <p className="error">{error}</p>}

    </div>
  );
}

export default Form;