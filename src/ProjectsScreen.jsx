import { useState } from 'react';
import { PROJECTS } from './projects-data.js';

export default function ProjectsScreen() {
  const [selected, setSelected] = useState(PROJECTS[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const project = PROJECTS.find((item) => item.id === selected);
  const images = project.images ?? (project.image ? [{ src: project.image, alt: `Captura de ${project.name}` }] : []);
  const currentImage = images[imageIndex] ?? images[0];

  return (
    <main className="project-screen">
      <div className="project-heading">
        <p className="project-kicker">ARCHIVO / {String(PROJECTS.length).padStart(2, '0')} PROYECTOS</p>
        <h1>SELECCIÓN DE PROYECTO</h1>
        <p>Elige una ficha para explorar qué construí, con qué herramientas y hasta dónde llegó cada proyecto.</p>
      </div>

      <div className="project-layout">
        <div className="project-picker" aria-label="Seleccionar proyecto">
          {PROJECTS.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={`project-choice${selected === item.id ? ' project-choice--active' : ''}`}
              onClick={() => { setSelected(item.id); setImageIndex(0); }}
              aria-pressed={selected === item.id}
              style={{ '--project-accent': item.accent }}
            >
              <span className="project-choice-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="project-choice-symbol">{item.symbol}</span>
              <span className="project-choice-copy"><strong>{item.name}</strong><small>{item.type}</small></span>
              <span className="project-choice-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>

        <article className="project-detail" style={{ '--project-accent': project.accent }} aria-live="polite">
          <div className="project-art">
            {currentImage ? <img src={currentImage.src} alt={currentImage.alt} /> : <span aria-hidden="true">{project.symbol}</span>}
          </div>
          {images.length > 1 && (
            <div className="project-gallery" aria-label={`Capturas de ${project.name}`}>
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={`project-gallery-thumb${index === imageIndex ? ' project-gallery-thumb--active' : ''}`}
                  onClick={() => setImageIndex(index)}
                  aria-label={`Mostrar captura ${index + 1} de ${images.length}: ${image.alt}`}
                  aria-pressed={index === imageIndex}
                >
                  <img src={image.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
          <div className="project-detail-body">
            <p className="project-detail-meta">{project.type}{project.year ? ` / ${project.year}` : ''}</p>
            <h2>{project.name}</h2>
            <p className="project-summary">{project.summary}</p>
            <ul className="project-detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-actions">
              {project.repository && <a className="project-link" href={project.repository} target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">↗</span></a>}
              {project.video && <a className="project-link" href={project.video} target="_blank" rel="noopener noreferrer">Ver demostración <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
