import { useNavigate } from "react-router-dom";
import "../App.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">SF</div>
          <div className="brand-text">
            <h2>Scheme Finder</h2>
            <p>Government Scheme Discovery Platform</p>
          </div>
        </div>

        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-buttons">
          <button className="btn btn-light">Login</button>
          <button className="btn btn-green">Register</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-badge">Smart Eligibility Matching</span>

          <h1>
            Find the right <span>government schemes</span> faster and easier
          </h1>

          <p className="hero-description">
            A modern platform to help users discover suitable government schemes
            using details like income, category, gender, occupation, state,
            age group, and preference — all in one place.
          </p>

          <div className="hero-actions">
            <button className="btn btn-green btn-large" onClick={() => navigate("/form")}>
              Check Schemes
            </button>
            <button className="btn btn-outline btn-large">
              Explore More
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Scheme Types</p>
            </div>
            <div className="stat-card">
              <h3>Fast</h3>
              <p>Eligibility Check</p>
            </div>
            <div className="stat-card">
              <h3>Easy</h3>
              <p>User Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <div className="panel-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>

            <div className="panel-body">
              <h3>Why Scheme Finder?</h3>

              <div className="feature-line">
                <span className="feature-icon">✓</span>
                <p>Clean and simple interface</p>
              </div>

              <div className="feature-line">
                <span className="feature-icon">✓</span>
                <p>Quick scheme matching process</p>
              </div>

              <div className="feature-line">
                <span className="feature-icon">✓</span>
                <p>Helpful results with reasons</p>
              </div>

              <div className="feature-line">
                <span className="feature-icon">✓</span>
                <p>Direct official scheme links</p>
              </div>

              <div className="mini-box-row">
                <div className="mini-box">
                  <h4>Students</h4>
                  <p>Education support</p>
                </div>
                <div className="mini-box">
                  <h4>Farmers</h4>
                  <p>Agriculture benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <span>About Platform</span>
          <h2>Built to make scheme discovery simple</h2>
          <p>
            Scheme Finder is designed to help people quickly identify relevant
            government schemes without confusion. It reduces manual searching
            and makes information more accessible.
          </p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">01</div>
            <h3>Smart Matching</h3>
            <p>
              Matches users with schemes based on the details they provide in
              the form.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">02</div>
            <h3>User Friendly</h3>
            <p>
              Clean layout and easy steps so anyone can use the platform
              comfortably.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">03</div>
            <h3>Reliable Flow</h3>
            <p>
              Gives result cards with score, reason, and scheme link for better
              clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="service-banner">
          <div>
            <span className="small-tag">What you get</span>
            <h2>Everything needed on one screen</h2>
          </div>

          <button className="btn btn-green" onClick={() => navigate("/form")}>
            Start Checking
          </button>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <h3>Scheme Eligibility</h3>
            <p>Check whether a person may qualify for suitable schemes.</p>
          </div>

          <div className="service-card">
            <h3>Personalized Results</h3>
            <p>Get recommendations according to profile details and preferences.</p>
          </div>

          <div className="service-card">
            <h3>Quick Access</h3>
            <p>Open scheme links directly from result cards after matching.</p>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <span>Contact Us</span>
          <h2>Need support or platform help?</h2>
          <p>
            Reach out for questions, feedback, or help regarding the Scheme
            Finder platform.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-card">
            <h3>Email</h3>
            <p>support@schemefinder.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Uttar Pradesh, India</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <h3>Scheme Finder</h3>
          <p>
            Helping users discover the right government schemes with a better
            digital experience.
          </p>
        </div>

        <div className="footer-right">
          <p><strong>Email:</strong> support@schemefinder.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Uttar Pradesh, India</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;