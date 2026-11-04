// ─── FORMACIÓN OFICIAL ────────────────────────────────────────────────────────
// tier: 'gold' | 'silver' | 'bronze'
// type: 'oficial' | 'curso' | 'certificacion'

export const FORMATION = [
  {
    id: 'dam',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    short: 'DAM',
    institution: 'Digitech-Progresa & Centro de Formación Integral',
    period: '2023 – 2026',
    duration: '3 años',
    type: 'oficial',
    tier: 'gold',
    completed: true,
    tags: ['Java', 'Kotlin', 'Android', 'SQL', 'XML', 'UML', 'Git'],
    description: 'Ciclo Formativo de Grado Superior. Diseño y desarrollo de aplicaciones multiplataforma, lógica de negocio y bases de datos.',
  },
  {
    id: 'smx',
    title: 'Técnico en Sistemas Microinformáticos y Redes',
    short: 'SMX',
    institution: 'IES Serra Perenxisa',
    period: 'Ene 2017 – Jun 2019',
    duration: '2,5 años',
    type: 'oficial',
    tier: 'silver',
    completed: true,
    tags: ['Hardware', 'Redes', 'Windows Server', 'Linux', 'Soporte técnico'],
    description: 'Ciclo Formativo de Grado Medio. Instalación, configuración y mantenimiento de sistemas informáticos y redes.',
  },
];

// ─── OTROS LOGROS (cursos, formación no oficial) ───────────────────────────────
export const COURSES = [
  {
    id: 'bc-course',
    title: 'Formación en Microsoft Dynamics 365 Business Central',
    short: 'Business Central',
    institution: 'd4b Solutions',
    period: 'Mar 2026 – May 2026',
    duration: '3 meses',
    type: 'curso',
    tier: 'bronze',
    completed: true,
    tags: ['Business Central', 'AL', 'ERP', 'RDLC'],
    description: 'Formación práctica en entorno empresarial real sobre desarrollo de extensiones AL y personalización de Business Central.',
  },
];

// ─── COMPETENCIAS TÉCNICAS ────────────────────────────────────────────────────
// level: 1–5  (cambia el número para ajustar las estrellas)
export const COMPETENCIES = [
  {
    id: 'languages',
    label: 'Lenguajes',
    color: '#38bdf8',
    skills: [
      { id: 'java',   name: 'Java',       level: 3 },
      { id: 'js',     name: 'JavaScript', level: 3 },
      { id: 'ts',     name: 'TypeScript', level: 2 },
      { id: 'php',    name: 'PHP',        level: 3 },
      { id: 'csharp', name: 'C#',         level: 2 },
      { id: 'kotlin', name: 'Kotlin',     level: 2 },
      { id: 'al',     name: 'AL',         level: 4 },
      { id: 'sql',    name: 'SQL',        level: 4 },
      { id: 'html',   name: 'HTML / CSS', level: 3 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#4ade80',
    skills: [
      { id: 'laravel',     name: 'Laravel',          level: 3 },
      { id: 'springboot',  name: 'Spring Boot',      level: 2 },
      { id: 'bc',          name: 'Business Central', level: 4 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend / Mobile',
    color: '#fb923c',
    skills: [
      { id: 'react',   name: 'React',   level: 2 },
      { id: 'android', name: 'Android', level: 2 },
      { id: 'unity',   name: 'Unity',   level: 2 },
    ],
  },
  {
    id: 'databases',
    label: 'Bases de datos',
    color: '#c084fc',
    skills: [
      { id: 'mysql',     name: 'MySQL',      level: 3 },
      { id: 'sqlserver', name: 'SQL Server', level: 2 },
      { id: 'mongodb',   name: 'MongoDB',    level: 2 },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    color: '#94a3b8',
    skills: [
      { id: 'git',         name: 'Git',          level: 3 },
      { id: 'azuredevops', name: 'Azure DevOps', level: 2 },
      { id: 'vscode',      name: 'VS Code',      level: 4 },
      { id: 'linux',       name: 'Linux',        level: 2 },
    ],
  },
];

// ─── HABILIDADES BLANDAS ──────────────────────────────────────────────────────
// El usuario rellenará estas entradas
export const SOFT_SKILLS = [
  // Ejemplo:
  // { id: 'work', label: 'Trabajo en equipo' },
  // { id: 'adapt', label: 'Adaptabilidad' },
];
