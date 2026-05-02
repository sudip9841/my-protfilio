export function Contact() {
  return (
    <section id="contact" className="contact shell">
      <div className="reveal">
        <span className="eyebrow" style={{ marginBottom: 28, justifyContent: "center" }}>
          Let's work together
        </span>
        <h2>
          Got something
          <br />
          <a href="mailto:sudiptamang000@gmail.com" className="em-link italic" data-cursor="hover">in mind?</a>
        </h2>
        <p className="lede" style={{ margin: "0 auto", textAlign: "center" }}>
          Reach out for contract work, full-time roles, or a coffee in Kathmandu.
        </p>
        <div className="contact-actions">
          <a href="mailto:sudiptamang000@gmail.com" className="btn btn-primary">
            sudiptamang000@gmail.com
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/sudip-tamang-mt8848" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
          <a href="tel:+9779860500572" className="btn">+977 9860 500572</a>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: 100 }}>
        <span>© 2026 Sudip Tamang · Built with React</span>
        <div className="links">
          <a href="https://linkedin.com/in/sudip-tamang-mt8848" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://sudiptamang1999.com.np" target="_blank" rel="noopener noreferrer">sudiptamang1999.com.np</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </section>
  );
}
