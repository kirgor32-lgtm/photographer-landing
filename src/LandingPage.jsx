import './landing.css'

const heroPhoto =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85'
const currentYear = new Date().getFullYear()

function LandingPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="На главную">
          <span className="wordmark-name">ВАШЕ ИМЯ</span>
          <span className="wordmark-role">ФОТОГРАФ</span>
        </a>
        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="header-link" href="#contacts">
          Связаться <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> ПОРТРЕТНАЯ И СЕМЕЙНАЯ СЪЁМКА</p>
          <h1 id="hero-title">Фотографии, в которых живёт <em>главное</em></h1>
          <p className="hero-description">
            Ловлю настоящие моменты и сохраняю их в кадре — легко, бережно и без лишних поз.
          </p>
          <a className="primary-link" href="#contacts">
            Обсудить съёмку <span aria-hidden="true">↗</span>
          </a>
          <p className="hero-note">Помогу с идеей, местом и настроением съёмки</p>
        </div>

        <figure className="hero-visual">
          <img
            className="hero-photo"
            src={heroPhoto}
            alt="Портрет девушки в мягком естественном свете"
          />
          <figcaption>
            <span>ЖИВЫЕ ИСТОРИИ</span>
            <span>01 / 03</span>
          </figcaption>
          <span className="photo-mark" aria-hidden="true">✳</span>
        </figure>
      </section>

      <section className="about-strip" id="about" aria-label="О подходе к съёмке">
        <p>Не нужно уметь позировать.<br /><strong>Достаточно быть собой.</strong></p>
        <span className="strip-divider" aria-hidden="true" />
        <p className="strip-note">Спокойная атмосфера<br />и фотографии с вашим характером.</p>
        <a className="text-link" href="#contacts">Познакомиться <span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer" id="contacts">
        <span>ЕСТЕСТВЕННО. ЧУТКО. ПРО ВАС.</span>
        <a href="mailto:hello@example.com">hello@example.com</a>
        <span>© {currentYear} · ВАШЕ ИМЯ</span>
      </footer>
    </main>
  )
}

export default LandingPage
