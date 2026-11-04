import { assetUrl } from './asset-url.js';

export const EXPERIENCE = [
  {
    id: 'd4b',
    company: 'd4b Solutions',
    role: 'Desarrollador AL · Business Central',
    period: 'Mar 2026 – May 2026',
    duration: '3 meses',
    location: 'Comunidad Valenciana',
    tags: ['AL', 'Business Central', 'RDLC', 'Git', 'Azure DevOps', 'VSCode'],
    summary:
      'Desarrollo de evolutivos a medida sobre Microsoft Dynamics 365 Business Central para clientes de distintos sectores.',
    bullets: [
      'Extensiones y lógica de negocio en AL junto a un equipo que trabajaba con Git y Azure DevOps.',
      'Automatización de la asignación de proyectos y tareas y propagación de datos en diarios de cobro y pago.',
      'Informes RDLC personalizados con múltiples orígenes de datos y agrupaciones.',
    ],
    thumbnail: assetUrl('assets/exp/d4b_logo.png'),
    preview: assetUrl('assets/exp/d4b_grande.png'),
    accent: '#0078d4',
    thumbnailFit: 'contain',
    previewFit: 'contain',
    screenshots: [
      assetUrl('assets/exp/d4b_grande.png'),
    ],
  },
  {
    id: 'hechiceria',
    company: 'HechicerIA',
    role: 'Programador Full Stack',
    period: 'Feb 2024 – Jun 2024',
    duration: '5 meses',
    location: 'Valencia, España',
    tags: ['Laravel', 'PHP', 'MySQL', 'Stripe', 'JavaScript', 'HTML', 'CSS'],
    summary:
      'Desarrollo del sistema de pagos, facturación y frontend de producto para una plataforma de IA generativa.',
    bullets: [
      'Implementación de pasarela de pagos, precios y suscripciones con Laravel, Stripe y MySQL.',
      'Desarrollo de interfaces web y páginas de producto para la plataforma.',
    ],
    thumbnail: assetUrl('assets/exp/hechiceria_logo.jpg'),
    preview: assetUrl('assets/exp/hechiceria_grande.png'),
    accent: '#7c3aed',
    previewFit: 'contain',
    screenshots: [
      assetUrl('assets/exp/hechiceria_grande.png'),
    ],
  },
  {
    id: 'ktwin',
    company: 'K-Tuin',
    role: 'Técnico Comercial',
    period: '2016',
    duration: '',
    location: 'Valencia, España',
    tags: ['Atención al cliente', 'Ventas', 'Apple', 'Visual merchandising', 'Stock'],
    summary:
      'Atención de clientes y venta de productos y servicios especializados de la marca Apple.',
    bullets: [
      'Control de stock y recepción de llamadas telefónicas.',
      'Mantenimiento y cuidado del visual merchandising siguiendo los estándares de la empresa.',
    ],
    thumbnail: assetUrl('assets/exp/ktwin_logo.png'),
    preview: assetUrl('assets/exp/ktwin_grande.jpg'),
    accent: '#ffffff',
    thumbnailFit: 'contain',
    previewFit: 'cover',
    screenshots: [
      assetUrl('assets/exp/ktwin_grande.jpg'),
    ],
  },
  {
    id: 'eliwell',
    company: 'Eliwell Ibérica',
    role: 'Técnico del SAT',
    period: '2020',
    duration: '',
    location: 'Valencia, España',
    tags: ['Soporte técnico', 'Hardware', 'Sistemas operativos'],
    summary:
      'Soporte técnico al cliente y a nivel interno. Creación de manuales de usuario y contenido audiovisual para facilitar el uso de los productos.',
    bullets: [
      'Resolución de incidencias y asistencia al cliente.',
      'Mantenimiento de equipos informáticos y sistemas operativos.',
      'Monitorización de sistemas frigoríficos para Mercadona.',
    ],
    thumbnail: assetUrl('assets/exp/Eliwell_logo.png'),
    preview: assetUrl('assets/exp/Eliwell_grande.png'),
    accent: '#fff09e',
    thumbnailFit: 'contain',
    previewFit: 'contain',
    screenshots: [
      assetUrl('assets/exp/Eliwell_grande.png'),
    ],
  },
];
