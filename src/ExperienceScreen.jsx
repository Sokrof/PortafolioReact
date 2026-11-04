import { useState, useEffect, useRef } from 'react';
import { EXPERIENCE } from './experience-data.js';

function thumbBg(exp) {
  return exp.thumbnail
    ? `url(${exp.thumbnail})`
    : `linear-gradient(135deg, ${exp.accent}99 0%, ${exp.accent} 100%)`;
}

function previewBg(exp) {
  return exp.preview
    ? `url(${exp.preview})`
    : `linear-gradient(135deg, ${exp.accent}44 0%, ${exp.accent}aa 100%)`;
}

function WorkGallery({ exp, onClose }) {
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (zoomed !== null) setZoomed(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, zoomed]);

  return (
    <div className="wg-backdrop" onClick={onClose}>
      <div className="wg-panel" onClick={(e) => e.stopPropagation()}>
        <div className="wg-header">
          <span className="wg-title">TRABAJOS — {exp.company}</span>
          <button className="wg-close" onClick={onClose}>✕ CERRAR</button>
        </div>
        <div className="wg-scroll">
          {exp.screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Trabajo ${i + 1} en ${exp.company}`}
              className="wg-img"
              draggable="false"
              onClick={() => setZoomed(src)}
            />
          ))}
        </div>
      </div>

      {zoomed !== null && (
        <div className="wg-lightbox" onClick={(e) => { e.stopPropagation(); setZoomed(null); }}>
          <img src={zoomed} alt="Zoom" className="wg-lightbox-img" draggable="false" />
          <button className="wg-lightbox-close" onClick={() => setZoomed(null)}>✕</button>
        </div>
      )}
    </div>
  );
}

export default function ExperienceScreen() {
  const [hovered, setHovered] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const current = EXPERIENCE[hovered];
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowUp')   setHovered((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowDown') setHovered((i) => Math.min(EXPERIENCE.length - 1, i + 1));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Auto-scroll: 1px per tick (~20px/s), pauses on hover
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = 0;

    const id = setInterval(() => {
      if (pausedRef.current) return;
      if (el.scrollTop < el.scrollHeight - el.clientHeight) {
        el.scrollTop += 1;
      }
    }, 50);

    return () => clearInterval(id);
  }, [hovered]);

  // Close gallery when switching company
  useEffect(() => { setShowGallery(false); }, [hovered]);

  return (
    <div className="exp-screen">
      {/* Preview background */}
      <div
        key={current.id}
        className="exp-preview-bg"
        style={{
          backgroundImage: previewBg(current),
          backgroundColor: current.accent + '33',
          backgroundSize: current.previewFit ?? 'cover',
        }}
      />

      {/* Left white panel */}
      <div className="exp-left-panel">
        <div className="exp-panel-header">
          <div className="exp-screen-title">EXPERIENCIA<br/>LABORAL</div>
          <hr className="exp-divider-line" />
        </div>

        <div
          className="exp-panel-scroll"
          ref={scrollRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          <div className="exp-company-block">
            <p className="exp-label">{current.role}</p>
            <h2 className="exp-company-name">{current.company}</h2>
            <p className="exp-meta">
              {[current.period, current.duration, current.location].filter(Boolean).join(' · ')}
            </p>
          </div>

          {current.summary && (
            <p className="exp-summary">{current.summary}</p>
          )}

          {current.bullets.length > 0 && (
            <ul className="exp-bullets">
              {current.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          {current.tags.length > 0 && (
            <div className="exp-tags">
              {current.tags.map((tag) => (
                <span key={tag} className="exp-tag">{tag}</span>
              ))}
            </div>
          )}

          <div className="exp-actions">
            {current.screenshots?.length > 0 && (
              <button className="exp-ver-detalle" onClick={() => setShowGallery(true)}>
                VISITA MI TRABAJO →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <ul className="exp-strip" role="listbox" aria-label="Selecciona empresa"
          style={{ '--exp-thumb-count': EXPERIENCE.length }}>
        {EXPERIENCE.map((exp, i) => (
          <li
            key={exp.id}
            role="option"
            aria-selected={i === hovered}
            className={`exp-thumb${i === hovered ? ' exp-thumb--active' : ''}`}
            style={{ '--thumb-accent': exp.accent, '--thumb-i': i }}
            onMouseEnter={() => setHovered(i)}
            onClick={() => {
              if (i === hovered && exp.url) {
                window.open(exp.url, '_blank', 'noopener,noreferrer');
              } else {
                setHovered(i);
              }
            }}
          >
            <div className="exp-thumb-bg" style={{ backgroundImage: thumbBg(exp), backgroundSize: exp.thumbnailFit ?? 'cover' }}>
              <span className="exp-thumb-label">{exp.company}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Work gallery action sheet */}
      {showGallery && <WorkGallery exp={current} onClose={() => setShowGallery(false)} />}
    </div>
  );
}
