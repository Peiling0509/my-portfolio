function Footer() {
    const currentYear = new Date().getFullYear(); // Automatically gets the current year

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    © {currentYear} <span className="footer-name">Pei Ling</span>. All rights reserved.
                </p>
                
                {/* Optional: Add your social or professional links here */}
                <div className="footer-links">
                    <a href="https://github.com/Peiling0509" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/chai-pei-ling-1a8b35261" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;