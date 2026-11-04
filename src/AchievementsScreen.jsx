import { FORMATION, COURSES, COMPETENCIES, SOFT_SKILLS } from './formation-data.js';

const TIER_COLOR = { gold: '#d4a000', silver: '#7a8a96', bronze: '#a0622a' };

const TYPE_LABEL = { oficial: 'OFICIAL', curso: 'CURSO', certificacion: 'CURSO' };

function AchievementCard({ entry }) {
  const color = TIER_COLOR[entry.tier];
  const typeLabel = TYPE_LABEL[entry.type] ?? 'CURSO';

  return (
    <article className="ach-card" style={{ '--tier-color': color }}>
      <div className="ach-card-accent" />
      <div className="ach-card-body">
        <div className="ach-card-header-row">
          <div className="ach-card-badges">
            <span className={`ach-type-badge ach-type-badge--${entry.type === 'oficial' ? 'oficial' : 'curso'}`}>
              {typeLabel}
            </span>
            <span className={`ach-done-badge ach-done-badge--${entry.completed ? 'done' : 'wip'}`}>
              {entry.completed ? '✓ COMPLETADO' : '● EN CURSO'}
            </span>
          </div>
          <i className="ti ti-trophy ach-trophy-icon" aria-hidden="true" />
        </div>

        <h3 className="ach-card-title">{entry.title}</h3>

        <p className="ach-card-meta">
          {[entry.institution, entry.period, entry.duration].filter(Boolean).join(' · ')}
        </p>

        <hr className="ach-card-divider" />

        {entry.description && (
          <p className="ach-card-desc">{entry.description}</p>
        )}

      </div>
    </article>
  );
}

function SectionLabel({ children }) {
  return <p className="ach-section-label">{children}</p>;
}

function SkillNode({ skill, color, first }) {
  return (
    <div className="sk-node-wrap">
      {!first && <div className="sk-line" style={{ '--cat': color }} />}
      <div className="sk-node" style={{ '--cat': color }}>
        <span className="sk-name">{skill.name}</span>
        <span className="sk-stars">
          {'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
        </span>
      </div>
    </div>
  );
}

function SkillBranch({ category }) {
  return (
    <div className="sk-branch">
      <div className="sk-cat" style={{ '--cat': category.color }}>
        {category.label}
      </div>
      <div className="sk-line" style={{ '--cat': category.color }} />
      <div className="sk-row">
        {category.skills.map((skill, i) => (
          <SkillNode key={skill.id} skill={skill} color={category.color} first={i === 0} />
        ))}
      </div>
    </div>
  );
}

export default function AchievementsScreen() {
  const total = FORMATION.length + COURSES.length;
  const hasCompetencies = COMPETENCIES.length > 0;
  const hasSoftSkills = SOFT_SKILLS.length > 0;

  return (
    <div className="ach-screen">
      <div className="ach-page-header">
        <div className="ach-page-header-left">
          <h2 className="ach-screen-title">LOGROS DESBLOQUEADOS</h2>
          <span className="ach-panel-count">{total} logros registrados</span>
        </div>
      </div>

      <div className="ach-content">
        <section className="ach-section">
          <SectionLabel>Formación</SectionLabel>
          <div className="ach-grid">
            {[...FORMATION, ...COURSES].map((entry) => (
              <AchievementCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        <section className="ach-section">
          <SectionLabel>Competencias Técnicas</SectionLabel>
          {hasCompetencies ? (
            <div className="sk-tree">
              {COMPETENCIES.map((cat) => (
                <SkillBranch key={cat.id} category={cat} />
              ))}
            </div>
          ) : (
            <p className="ach-placeholder-text">Próximamente</p>
          )}
        </section>

        {hasSoftSkills && (
          <section className="ach-section">
            <SectionLabel>Habilidades</SectionLabel>
            <div className="ach-tags">
              {SOFT_SKILLS.map((s) => (
                <span key={s.id} className="ach-tag">{s.label}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
