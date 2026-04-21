import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import ResultCard from "../components/ResultCard";
import "../App.css";

function FormPage() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("schemeUser"));
  const token = localStorage.getItem("schemeToken");

  const handleLogout = () => {
    localStorage.removeItem("schemeUser");
    localStorage.removeItem("schemeToken");
    navigate("/login");
  };

  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <div className="sf-form-page">
      <div className="sf-form-shell">
        <div className="sf-form-topbar">
          <div>
            <h1 className="sf-form-title">Scheme Finder</h1>
            <p className="sf-form-subtitle">
              Welcome{user?.name ? `, ${user.name}` : ""} 👋
            </p>
          </div>

          <button className="sf-logout-main-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="sf-form-layout">
          <div className="sf-form-card">
            <div className="sf-card-badge">Eligibility Form</div>
            <h2>Check your matching schemes</h2>
            <p>
              Fill your details to discover government schemes based on your
              profile and preferences.
            </p>

            <Form setResults={setResults} />
          </div>

          <div className="sf-result-card-wrap">
            <div className="sf-card-badge">Results</div>
            <h2>Matched schemes</h2>
            <p>
              Your most relevant schemes will appear here with reasons and links.
            </p>

            <div className="sf-results-list">
              {(!results || results.length === 0) && (
                <div className="sf-empty-state">
                  <h3>No results yet</h3>
                  <p>Fill the form and click “Check Eligibility” to see results.</p>
                </div>
              )}

              {results &&
                results.map((scheme, index) => (
                  <ResultCard key={index} scheme={scheme} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;