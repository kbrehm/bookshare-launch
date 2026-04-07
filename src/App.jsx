import "./App.css";

export default function App() {
  const reversals = [
    {
      complaint: "Too many ads",
      answer: "No ads. No interruptions. No clutter between readers and writing.",
    },
    {
      complaint: "Discovery feels rigged",
      answer: "Transparent discovery through new, trending, most requested, and hidden gems.",
    },
    {
      complaint: "Community tools got weaker",
      answer: "Human connection stays, with structured contact and safer author-reader interaction.",
    },
    {
      complaint: "Everything pushes monetization",
      answer: "Free to join. Free to post. Free to read. We monetize only after value exists.",
    },
  ];

  const steps = [
    {
      title: "Create your page",
      text: "Set up your author profile in minutes. No gatekeepers. No waiting.",
    },
    {
      title: "Post your writing",
      text: "Drop in a chapter, excerpt, story, or full draft and get a public page instantly.",
    },
    {
      title: "Build momentum",
      text: "Readers follow, request, react, and help surface the writing that deserves more.",
    },
  ];

  const features = [
    "Ad-free reading experience",
    "Free posting for authors",
    "Transparent discovery instead of black-box feeds",
    "Request-based author control",
    "Follow authors and rising stories",
    "Designed to surface breakout work for future publishing",
  ];

  return (
    <div className="page">
      <div className="background-glow"></div>

      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="brand">BookShare</div>
            <div className="brand-subtitle">Ad-free. Author-first. Built for breakout writing.</div>
          </div>
          <nav className="nav-links">
            <a href="#why">Why us</a>
            <a href="#how">How it works</a>
            <a href="#post" className="nav-button">Start posting</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section container">
          <div className="hero-copy">
            <div className="eyebrow">A counter-position to ad-heavy writing platforms</div>
            <h1>Post your writing free. Build readers free. Let the crowd prove what deserves more.</h1>
            <p className="hero-text">
              BookShare is a clean, ad-free home for writers and readers. No paywall to participate. No algorithm worship. No clutter. Just stories, discovery, and a real shot at surfacing the next breakout work before the industry catches up.
            </p>
            <div className="hero-actions">
              <a href="#post" className="primary-button">Post your first chapter</a>
              <a href="#why" className="secondary-button">See why writers switch</a>
            </div>
            <div className="tag-row">
              <span>Free to join</span>
              <span>Free to read</span>
              <span>No ads</span>
              <span>Author-controlled</span>
            </div>
          </div>

          <div className="launch-card">
            <div className="launch-card-label">Writer launch form</div>
            <div className="form-stack">
              <div>
                <label>Author name</label>
                <input placeholder="Your author name" />
              </div>
              <div>
                <label>Story title</label>
                <input placeholder="Title of your work" />
              </div>
              <div>
                <label>Genre</label>
                <select>
                  <option>Fantasy</option>
                  <option>Sci-Fi</option>
                  <option>Romance</option>
                  <option>Dystopian</option>
                  <option>Thriller</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label>Paste your opening</label>
                <textarea placeholder="Paste your first chapter or excerpt here..."></textarea>
              </div>
              <button className="full-button">Claim your page and start posting</button>
              <p className="form-note">No ads. No fees. No gatekeeper review queue.</p>
            </div>
          </div>
        </section>

        <section id="why" className="section container">
          <div className="section-intro">
            <p className="section-kicker">Why this exists</p>
            <h2>We built the opposite of what writers and readers complain about.</h2>
            <p>
              Some platforms interrupt the reading experience, bury new work, and push monetization before community. BookShare flips each of those choices on purpose.
            </p>
          </div>

          <div className="card-grid two-col">
            {reversals.map((item) => (
              <div key={item.complaint} className="info-card">
                <div className="mini-label">Complaint</div>
                <h3>{item.complaint}</h3>
                <div className="divider"></div>
                <div className="mini-label accent">Our answer</div>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="section container">
          <div className="section-intro">
            <p className="section-kicker">How it works</p>
            <h2>Built for easy posting, repeat reading, and visible momentum.</h2>
          </div>

          <div className="card-grid three-col">
            {steps.map((step, index) => (
              <div key={step.title} className="step-card">
                <div className="step-badge">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container">
          <div className="feature-panel">
            <div>
              <p className="section-kicker">What you get</p>
              <h2>A cleaner home for writing and a better signal for what deserves a real shot.</h2>
              <p>
                The mission is simple: create one place where authors can post freely, readers can discover freely, and breakout writing becomes impossible for the industry to ignore.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <div key={feature} className="feature-item">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="post" className="section container">
          <div className="cta-panel">
            <div className="section-kicker dark">Launch invitation</div>
            <h2>Stop waiting for permission. Start building readers now.</h2>
            <p>
              Post your first chapter, build your page, and be part of the writing community that chooses freedom, visibility, and reader proof over ads, clutter, and black-box promotion.
            </p>
            <div className="hero-actions">
              <button className="dark-button">Start posting free</button>
              <button className="ghost-dark-button">Read rising stories</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
