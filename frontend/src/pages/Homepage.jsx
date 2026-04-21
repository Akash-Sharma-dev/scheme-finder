import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function HomePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const getInitial = () => {
    return user?.name ? user.name.charAt(0).toUpperCase() : "U";
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sf-homepage">
      <header className="sf-navbar">
        <div className="sf-logo-wrap">
          <div className="sf-logo">SF</div>
          <div>
            <h2 className="sf-brand-title">Scheme Finder</h2>
            <p className="sf-brand-subtitle">Government Benefits Discovery Platform</p>
          </div>
        </div>

        <nav className="sf-nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#process">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="sf-nav-actions">
          {!user ? (
            <>
              <Link to="/login" className="sf-btn sf-btn-light">Login</Link>
              <Link to="/register" className="sf-btn sf-btn-primary">Register</Link>
            </>
          ) : (
            <>
              <Link to="/form" className="sf-btn sf-btn-primary">Check Scheme</Link>

              <div className="sf-profile-wrap">
                <div
                  className="sf-profile-circle"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {getInitial()}
                </div>

                {menuOpen && (
                  <div className="sf-profile-dropdown">
                    <p className="sf-profile-name">{user.name}</p>
                    <button onClick={() => navigate("/form")}>Check Scheme</button>
                    <button onClick={handleLogout} className="sf-logout-btn">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </header>

      <section id="home" className="sf-hero">
        <div className="sf-hero-left">
          <div className="sf-hero-badge">Smart Public Welfare Discovery</div>
          <h1>
            Find the right <span>government schemes</span> for your profile
          </h1>
          <p>
            A modern eligibility platform that helps citizens discover government
            schemes based on income, category, state, gender, occupation and age group.
            Fast, simple, secure, and easy to use.
          </p>

          <div className="sf-hero-actions">
            {!user ? (
              <>
                <Link to="/register" className="sf-btn sf-btn-primary sf-btn-lg">
                  Start Checking
                </Link>
                <Link to="/login" className="sf-btn sf-btn-light sf-btn-lg">
                  Login
                </Link>
              </>
            ) : (
              <Link to="/form" className="sf-btn sf-btn-primary sf-btn-lg">
                Go to Eligibility Form
              </Link>
            )}
          </div>

          <div className="sf-trust-row">
            <div className="sf-trust-chip">Income-based matching</div>
            <div className="sf-trust-chip">Secure login access</div>
            <div className="sf-trust-chip">Official scheme links</div>
          </div>
        </div>

        <div className="sf-hero-right">
          <div className="sf-dashboard-card">
            <div className="sf-dashboard-top">
              <span className="sf-dot sf-red"></span>
              <span className="sf-dot sf-yellow"></span>
              <span className="sf-dot sf-green"></span>
            </div>

            <div className="sf-dashboard-body">
              <h3>Eligibility Overview</h3>

              <div className="sf-mini-stat-grid">
                <div className="sf-mini-stat">
                  <h4>20+</h4>
                  <p>Scheme Records</p>
                </div>
                <div className="sf-mini-stat">
                  <h4>Fast</h4>
                  <p>Smart Filtering</p>
                </div>
              </div>

              <div className="sf-feature-list">
                <div className="sf-feature-item">
                  <span>✓</span>
                  <p>Personalized scheme suggestions</p>
                </div>
                <div className="sf-feature-item">
                  <span>✓</span>
                  <p>Secure token-based access</p>
                </div>
                <div className="sf-feature-item">
                  <span>✓</span>
                  <p>Accurate eligibility scoring</p>
                </div>
                <div className="sf-feature-item">
                  <span>✓</span>
                  <p>Direct official scheme website links</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sf-stats-strip">
        <div className="sf-stat-box">
          <h3>Fast</h3>
          <p>Instant eligibility matching</p>
        </div>
        <div className="sf-stat-box">
          <h3>Secure</h3>
          <p>Protected route access</p>
        </div>
        <div className="sf-stat-box">
          <h3>Reliable</h3>
          <p>Rule-based scheme scoring</p>
        </div>
        <div className="sf-stat-box">
          <h3>Useful</h3>
          <p>Direct official links</p>
        </div>
      </section>

      <section id="about" className="sf-section">
        <div className="sf-section-head">
          <span>About Platform</span>
          <h2>A smarter way to discover public benefit schemes</h2>
          <p>
            Scheme Finder is a citizen-focused web application designed to reduce confusion
            around government welfare programs. Instead of searching manually, users can fill
            in their details once and instantly view matching schemes.
          </p>
        </div>

        <div className="sf-about-grid">
          <div className="sf-about-card">
            <div className="sf-about-icon">01</div>
            <h3>Citizen Friendly</h3>
            <p>
              Clean interface for students, workers, farmers, unemployed users and families.
            </p>
          </div>

          <div className="sf-about-card">
            <div className="sf-about-icon">02</div>
            <h3>Secure Access</h3>
            <p>
              Login and register flow ensures only authenticated users access the checker.
            </p>
          </div>

          <div className="sf-about-card">
            <div className="sf-about-icon">03</div>
            <h3>Smart Filtering</h3>
            <p>
              Schemes are matched using income, category, gender, state, age group and occupation.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="sf-section sf-section-alt">
        <div className="sf-section-head">
          <span>Core Features</span>
          <h2>Everything needed for a professional scheme discovery app</h2>
        </div>

        <div className="sf-feature-grid">
          <div className="sf-feature-card">
            <h3>Eligibility Checker</h3>
            <p>Instantly check schemes by entering personal criteria.</p>
          </div>
          <div className="sf-feature-card">
            <h3>JWT Authentication</h3>
            <p>Protected access so only logged-in users can use scheme checking.</p>
          </div>
          <div className="sf-feature-card">
            <h3>Score-Based Ranking</h3>
            <p>Best-matched schemes can be shown at the top.</p>
          </div>
          <div className="sf-feature-card">
            <h3>Official Links</h3>
            <p>Users can directly visit the original scheme website.</p>
          </div>
          <div className="sf-feature-card">
            <h3>Responsive UI</h3>
            <p>Clean design that works well across desktop and mobile.</p>
          </div>
          <div className="sf-feature-card">
            <h3>Profile Access</h3>
            <p>Logged-in users get profile menu and personalized flow.</p>
          </div>
        </div>
      </section>

      <section id="process" className="sf-section">
        <div className="sf-section-head">
          <span>How It Works</span>
          <h2>Simple 3-step user journey</h2>
        </div>

        <div className="sf-process-grid">
          <div className="sf-process-card">
            <div className="sf-step-circle">1</div>
            <h3>Create Account</h3>
            <p>Register and login securely to unlock the eligibility form.</p>
          </div>
          <div className="sf-process-card">
            <div className="sf-step-circle">2</div>
            <h3>Fill Your Details</h3>
            <p>Enter income, state, category, occupation, age group and preference.</p>
          </div>
          <div className="sf-process-card">
            <div className="sf-step-circle">3</div>
            <h3>Get Matching Schemes</h3>
            <p>View ranked scheme results with reasoning and direct links.</p>
          </div>
        </div>
      </section>

      <section className="sf-cta-section">
        <div className="sf-cta-card">
          <div>
            <span className="sf-cta-tag">Ready to begin?</span>
            <h2>Check your eligible schemes in minutes</h2>
            <p>
              Use the smart scheme checker and discover programs relevant to your needs.
            </p>
          </div>

          <div className="sf-cta-actions">
            {!user ? (
              <>
                <Link to="/register" className="sf-btn sf-btn-primary">Register Now</Link>
                <Link to="/login" className="sf-btn sf-btn-light">Login</Link>
              </>
            ) : (
              <Link to="/form" className="sf-btn sf-btn-primary">Open Checker</Link>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="sf-section sf-contact-section">
        <div className="sf-section-head">
          <span>Contact</span>
          <h2>Need help or support?</h2>
          <p>For queries related to platform usage, reach out here.</p>
        </div>

        <div className="sf-contact-grid">
          <div className="sf-contact-card">
            <h3>Email Support</h3>
            <p>support@schemefinder.com</p>
          </div>
          <div className="sf-contact-card">
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>
          <div className="sf-contact-card">
            <h3>Availability</h3>
            <p>Mon - Sat | 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>

      <footer className="sf-footer">
        <div>
          <h3>Scheme Finder</h3>
          <p>Government benefit discovery platform with secure eligibility access.</p>
        </div>

        <div className="sf-footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;