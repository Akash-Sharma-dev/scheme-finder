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
    <div className="container">
      <div className="card" style={{ width: "100%", maxWidth: "900px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 className="title" style={{ marginBottom: "6px", textAlign: "left" }}>
              Scheme Finder
            </h1>
            <p style={{ margin: 0, color: "#666" }}>
              Welcome{user?.name ? `, ${user.name}` : ""} 👋
            </p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Logout
          </button>
        </div>

        <Form setResults={setResults} />

        <div className="results">
          <h2>Results</h2>

          {(!results || results.length === 0) && <p>No results yet</p>}

          {results &&
            results.map((scheme, index) => (
              <ResultCard key={index} scheme={scheme} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FormPage;