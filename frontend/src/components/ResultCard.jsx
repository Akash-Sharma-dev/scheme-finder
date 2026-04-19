function ResultCard({ scheme }) {

  const handleClick = () => {
    if (scheme.link) {
      window.open(scheme.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="result-card">
      <h3>{scheme.name}</h3>
      <p className="score">Score: {scheme.score}</p>
      <p>{scheme.reason}</p>

      <button onClick={handleClick}>
        View Scheme
      </button>
    </div>
  );
}

export default ResultCard;