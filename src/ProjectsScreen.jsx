import { useEffect, useState } from 'react';
import { PROJECTS } from './projects-data.js';

function readProject() {
  const id = window.location.hash.slice(1).split('/')[1];
  return PROJECTS.some((item) => item.id === id) ? id : PROJECTS[0].id;
}

function ProjectYouTube({ media, projectName }) {
  const [playing, setPlaying] = useState(false);

  if (!playing) {
    return (
      <button
        type="button"
        className="project-youtube-preview"
        onClick={() => setPlaying(true)}
        aria-label={`Reproducir ${media.title} de ${projectName}`}
      >
        <img src={media.poster} alt="" loading="lazy" />
        <span className="project-youtube-play" aria-hidden="true">▶</span>
        <span className="project-youtube-label">Reproducir demostración</span>
      </button>
    );
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${media.youtubeId}?autoplay=1`}
      title={`${media.title} de ${projectName}`}
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default function ProjectsScreen() {
  const [selected, setSelected] = useState(readProject);
  const [imageIndex, setImageIndex] = useState(0);
  const project = PROJECTS.find((item) => item.id === selected);
  const images = project.images ?? (project.image ? [{ src: project.image, alt: `Captura de ${project.name}` }] : []);
  const currentImage = images[imageIndex] ?? images[0];

  useEffect(() => {
    const syncProject = () => { setSelected(readProject()); setImageIndex(0); };
    window.addEventListener('hashchange', syncProject);
    return () => window.removeEventListener('hashchange', syncProject);
  }, []);

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
              onClick={() => { window.location.hash = `projects/${item.id}`; setSelected(item.id); setImageIndex(0); }}
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
          <div className={`project-art${project.id === 'habithero' ? ' project-art--portrait' : ''}`}>
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
            {project.mediaVideos?.length > 0 && (
              <section className="project-videos" aria-label={`Vídeos de ${project.name}`}>
                <h3>El proyecto en vídeo</h3>
                <div className="project-video-list">
                  {project.mediaVideos.map((media) => (
                    <div className="project-video" key={media.src ?? media.youtubeId}>
                      <div className="project-video-copy">
                        <h4>{media.title}</h4>
                        <p>{media.description}</p>
                        {media.url && <a href={media.url} target="_blank" rel="noopener noreferrer">Abrir en YouTube <span aria-hidden="true">↗</span></a>}
                      </div>
                      {media.youtubeId ? (
                        <ProjectYouTube media={media} projectName={project.name} />
                      ) : (
                        <video controls preload="none" playsInline poster={media.poster} aria-label={`${media.title} de ${project.name}`}>
                          <source src={media.src} type="video/mp4" />
                          Tu navegador no puede reproducir este vídeo.
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
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
