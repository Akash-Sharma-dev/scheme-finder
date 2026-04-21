import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="homepage">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">SF</div>
          <div className="brand-text">
            <h2>Scheme Finder</h2>
            <p>Find schemes you may qualify for</p>
          </div>
        </div>

        <div className="nav-buttons">
          {!user ? (
            <>
              <Link to="/login" className="btn btn-light">Login</Link>
              <Link to="/register" className="btn btn-green">Register</Link>
            </>
          ) : (
            <>
              <Link to="/form" className="btn btn-green">Check Scheme</Link>
              <button onClick={handleLogout} className="btn btn-light">
                Logout
              </button>
            </>
          )}
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Government Scheme Discovery</span>
          <h1>
            Check the best <span>government schemes</span> for you
          </h1>
          <p className="hero-description">
            Register first, login securely, and then access the scheme checker.
            Your design stays almost same, but now only logged-in users can use
            the scheme check page.
          </p>

          <div className="hero-actions">
            {!user ? (
              <>
                <Link to="/register" className="btn btn-green btn-large">
                  Get Started
                </Link>
                <Link to="/login" className="btn btn-outline btn-large">
                  Login
                </Link>
              </>
            ) : (
              <Link to="/form" className="btn btn-green btn-large">
                Go to Scheme Check
              </Link>
            )}
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>Fast</h3>
              <p>Quick eligibility check</p>
            </div>
            <div className="stat-card">
              <h3>Secure</h3>
              <p>Protected access with login</p>
            </div>
            <div className="stat-card">
              <h3>Useful</h3>
              <p>Better scheme suggestions</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <div className="panel-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="panel-body">
              <h3>Why this app?</h3>

              <div className="feature-line">
                <div className="feature-icon">✓</div>
                <p>Register and login before access</p>
              </div>

              <div className="feature-line">
                <div className="feature-icon">✓</div>
                <p>Protected scheme checker page</p>
              </div>

              <div className="feature-line">
                <div className="feature-icon">✓</div>
                <p>Easy result cards with links</p>
              </div>

              <div className="mini-box-row">
                <div className="mini-box">
                  <h4>Auth</h4>
                  <p>Token based access</p>
                </div>
                <div className="mini-box">
                  <h4>UI</h4>
                  <p>Clean and simple frontend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;