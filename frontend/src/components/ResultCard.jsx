function ResultCard({ scheme }) {
  return (
    <div className="sf-result-item">
      <div className="sf-result-top">
        <h3>{scheme.name}</h3>
        <span className="sf-score-pill">Score: {scheme.score}</span>
      </div>

      <p className="sf-result-reason">
        <strong>Reason:</strong> {scheme.reason}
      </p>

      {scheme.link && (
        <a
          href={scheme.link}
          target="_blank"
          rel="noreferrer"
          className="sf-result-link"
        >
          Visit Official Website
        </a>
      )}
    </div>
  );
}

export default ResultCard;