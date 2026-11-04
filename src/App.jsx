import { useState, useEffect } from 'react';
import ExperienceScreen from './ExperienceScreen.jsx';
import AchievementsScreen from './AchievementsScreen.jsx';

const ASSETS = {
  background: "/assets/fondo.png",
  frame: "/assets/marco-desbloquear.png",
  frameDark: "/assets/marco-desbloquear-dark.png",
  portrait: "/assets/foto-daniel.png",
  portraitDark: "/assets/foto-daniel-dark.png",
};

const NAV_ITEMS = [
  { id: 'experience', label: 'Experiencia' },
  { id: 'formation',  label: 'Formación'   },
  { id: 'projects',   label: 'Proyectos'   },
  { id: 'about',      label: 'Sobre Mí'    },
  { id: 'contact',    label: 'Contacto'    },
];

function TopNav({ current, onNavigate, onBack, isDark, onToggleTheme }) {
  return (
    <nav className="top-nav">
      <button className="top-nav-back" onClick={onBack}>← Inicio</button>
      <div className="top-nav-tabs">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`top-nav-tab${current === item.id ? ' top-nav-tab--active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      >
        <span
          className="theme-toggle-thumb"
          style={isDark
            ? { transform: 'translateX(0)',  background: '#fbbf24', color: '#78350f' }
            : { transform: 'translateX(28px)', background: '#818cf8', color: '#1e1b4b' }
          }
        >
          <i className={`ti ${isDark ? 'ti-sun' : 'ti-moon'}`} aria-hidden="true" />
        </span>
      </button>
    </nav>
  );
}

function PlaceholderScreen({ title }) {
  return (
    <div className="placeholder-screen">
      <p>{title}</p>
      <span>Próximamente</span>
    </div>
  );
}

function StartButton({ onClick }) {
  return (
    <button
      className="start-button"
      type="button"
      aria-label="Pulsa Start"
      onClick={onClick}
    >
      <span>Pulsa</span>
      <span className="button-x" aria-hidden="true">X</span>
      <span>Start</span>
    </button>
  );
}

function RankBanner({ isDark }) {
  return (
    <div className="rank-banner" aria-label="Desbloquear perfil">
      <img
        className="rank-frame"
        src={isDark ? ASSETS.frameDark : ASSETS.frame}
        onError={(e) => { e.target.src = ASSETS.frame; }}
        alt=""
        draggable="false"
      />
      <span className="rank-text">Desbloquear</span>
    </div>
  );
}

function StartScreen({ onStart, crtOn, isDark, onToggleTheme }) {
  return (
    <main className="start-screen">
      <img className="background-art" src={ASSETS.background} alt="" />
      {crtOn && <div className="crt-overlay" aria-hidden="true" />}
      <button
        className="theme-toggle start-screen-toggle"
        onClick={onToggleTheme}
        aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      >
        <span
          className="theme-toggle-thumb"
          style={isDark
            ? { transform: 'translateX(0)',    background: '#fbbf24', color: '#78350f' }
            : { transform: 'translateX(28px)', background: '#818cf8', color: '#1e1b4b' }
          }
        >
          <i className={`ti ${isDark ? 'ti-sun' : 'ti-moon'}`} aria-hidden="true" />
        </span>
      </button>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="portrait"
          src={isDark ? ASSETS.portraitDark : ASSETS.portrait}
          onError={(e) => { e.target.src = ASSETS.portrait; }}
          alt="Retrato de Daniel"
          draggable="false"
        />
        <div className="identity">
          <h1 id="hero-title">Daniel</h1>
          <p>Full-Stack</p>
        </div>
        <RankBanner isDark={isDark} />
        <StartButton onClick={onStart} />
      </section>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState('start');
  const [crtOn, setCrtOn] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 't' || e.key === 'T') setCrtOn((v) => !v);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  if (screen === 'start') {
    return <StartScreen onStart={() => setScreen('experience')} crtOn={crtOn} isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />;
  }

  return (
    <>
      <TopNav
        current={screen}
        onNavigate={setScreen}
        onBack={() => setScreen('start')}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
      />
      {screen === 'experience' && <ExperienceScreen />}
      {screen === 'formation'  && <AchievementsScreen />}
      {screen === 'projects'   && <PlaceholderScreen title="PROYECTOS" />}
      {screen === 'about'      && <PlaceholderScreen title="SOBRE MÍ" />}
      {screen === 'contact'    && <PlaceholderScreen title="CONTACTO" />}
    </>
  );
}
