import { NavLink, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <section className="hero card">
      <span className="eyebrow">REACT + VITE STARTER</span>
      <h1>Build something <span>great.</span></h1>
      <p>A clean starting point with client-side routing, reusable layout, and responsive styling.</p>
      <div className="hero-actions">
        <NavLink className="button primary" to="/about">Explore the app</NavLink>
        <NavLink className="button secondary" to="/contact">Get in touch</NavLink>
      </div>
      <div className="feature-grid">
        <article className="feature">
          <div className="feature-icon">⚡</div>
          <h3>Fast development</h3>
          <p>Vite gives you a quick development server and optimized production builds.</p>
        </article>
        <article className="feature">
          <div className="feature-icon">🧭</div>
          <h3>Three routes</h3>
          <p>Navigate between Home, About, and Contact without full-page reloads.</p>
        </article>
        <article className="feature">
          <div className="feature-icon">📱</div>
          <h3>Responsive UI</h3>
          <p>A simple layout that adapts to desktop, tablet, and mobile screens.</p>
        </article>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="page card">
      <span className="eyebrow">ABOUT</span>
      <h1>A little about this app</h1>
      <p>This starter project combines React components with React Router and Vite.</p>
      <div className="info-list">
        <div><strong>Frontend</strong><span>React</span></div>
        <div><strong>Build tool</strong><span>Vite</span></div>
        <div><strong>Routing</strong><span>React Router</span></div>
      </div>
      <NavLink className="button primary" to="/">Back to home</NavLink>
    </section>
  )
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    alert(`Thanks, ${formData.get('name')}! This demo form is not connected to a backend.`)
    event.currentTarget.reset()
  }

  return (
    <section className="page card">
      <span className="eyebrow">CONTACT</span>
      <h1>Let’s talk.</h1>
      <p>Try the demo form below. Connect it to your API when you're ready.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input name="name" type="text" placeholder="Enter your name" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="How can we help?" required />
        </label>
        <button className="button primary" type="submit">Send message</button>
      </form>
    </section>
  )
}

function NotFound() {
  return (
    <section className="page card">
      <span className="eyebrow">404 · NOT FOUND</span>
      <h1>That route doesn’t exist.</h1>
      <p>Try heading back to the home page.</p>
      <NavLink className="button primary" to="/">Go home</NavLink>
    </section>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Starter home">
          <span className="brand-mark">R</span>
          <span>Route<span className="brand-light">Starter</span></span>
        </NavLink>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} RouteStarter</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  )
}