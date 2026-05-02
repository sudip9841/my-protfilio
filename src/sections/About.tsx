export function About() {
  return (
    <section id="about" className="shell">
      <div className="section-head reveal">
        <div className="label">
          <span className="eyebrow">01 — About</span>
        </div>
        <h2 className="display">
          A quick <em className="italic" style={{ fontStyle: "italic" }}>introduction.</em>
        </h2>
      </div>

      <div className="about-grid reveal">
        <div className="about-text" data-cursor="text">
          <p>
            I started writing HTML and CSS by hand, the way you build a desk before you trust yourself with
            power tools. Four years on, I work mostly in <strong>React</strong> and <strong>Angular</strong>, with
            <strong> Django</strong> on the back when a feature needs to go end-to-end.
          </p>
          <p>
            I care about the parts of frontend that don't get applause — the
            <em> empty states, the loading pauses, the keyboard paths</em> — because those are
            the moments a product either feels considered or doesn't.
          </p>
          <p>
            Lately I've been deep in <strong>healthcare RCM tooling</strong> at Maitri,
            building interfaces that doctors, coders and ops teams use all day. The bar is
            quiet reliability over flash.
          </p>
        </div>

        <aside className="id-card glass" aria-label="Quick facts">
          <div className="row"><span className="k">Based</span><span className="v">Kathmandu, NP</span></div>
          <div className="row"><span className="k">Role</span><span className="v">Software Engineer</span></div>
          <div className="row"><span className="k">Years</span><span className="v">4+ shipping</span></div>
          <div className="row"><span className="k">Stack</span><span className="v">React · Angular · Django</span></div>
          <div className="row"><span className="k">Domains</span><span className="v">Healthcare · Fintech</span></div>
          <div className="row"><span className="k">Open to</span><span className="v">Remote · Contract</span></div>
        </aside>
      </div>
    </section>
  );
}
