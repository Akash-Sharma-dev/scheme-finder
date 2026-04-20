import { useState } from "react";
import Form from "../components/Form";
import ResultCard from "../components/ResultCard";
import "../App.css";

function FormPage() {
  const [results, setResults] = useState([]);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Scheme Finder</h1>

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