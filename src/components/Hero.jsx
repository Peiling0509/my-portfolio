import profile from "../assets/profile.jpeg";
import '../styles/hero.css';

function Hero() {
    return (
        <section className="hero">
            {/* Ambient background glows */}
            <div className="ambient-glow glow-1"></div>
            <div className="ambient-glow glow-2"></div>

            <div className="hero-container">
                {/* LEFT COLUMN: Text Content */}
                <div className="hero-text-content">
                    <h3 className="hero-subtitle">Fresh Grad Software Engineer</h3>
                    <h1 className="hero-title">
                        Hello I'm <br />
                        <span className="highlight-text">Pei Ling</span>
                    </h1>

                    <p className="hero-description">
                        I specialize in building cross-platform mobile applications, robust full-stack systems, and modern software solutions.
                    </p>

                    <div className="hero-actions">
                        <a href="/Resume.pdf" download tabIndex="-1" className="download-btn">
                            DOWNLOAD CV
                            {/* Simple Download Icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>

                        <div className="social-icons">
                            <a href="https://github.com/Peiling0509" target="_blank" rel="noreferrer" className="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://linkedin.com/in/chai-pei-ling-1a8b35261" target="_blank" rel="noreferrer" className="social-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Image with rotating dashed ring */}
                <div className="hero-image-content">
                    <div className="image-wrapper">

                        {/* Replaced the div with an SVG to create the custom long/short dash pattern */}
                        <svg className="dashed-ring" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                fill="none"
                                stroke="#F05941"
                                strokeWidth="1.5"
                                strokeDasharray="12 5 3 5"
                            />
                        </svg>

                        <img
                            src={profile}
                            className="profile-image"
                            alt="Pei Ling"
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: Statistics */}
            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-text">Major projects<br />completed</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">1</span>
                    <span className="stat-text">Commercial system<br />delivered</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">4+</span>
                    <span className="stat-text">Core technologies<br />mastered</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">2026</span>
                    <span className="stat-text">Graduation<br />year</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;