function ResultCard({ scheme }) {
  return (
    <div className="result-card">
      <h3>{scheme.name}</h3>
      <p className="score">Score: {scheme.score}</p>
      <p>{scheme.reason}</p>
    </div>
  );
}

export default ResultCard;