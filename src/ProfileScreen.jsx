const links = [
  { label: 'Correo electrónico', value: 'godaniel.fullstack@gmail.com', href: 'mailto:godaniel.fullstack@gmail.com' },
  { label: 'GitHub', value: 'github.com/Sokrof', href: 'https://github.com/Sokrof' },
  { label: 'LinkedIn', value: 'Perfil profesional', href: 'https://www.linkedin.com/in/godanieltorrent/' },
];

export default function ProfileScreen({ contact = false }) {
  return (
    <main className="profile-screen">
      <div className="profile-panel">
        <p className="profile-kicker">{contact ? 'CONECTAR / 05' : 'PERFIL / 04'}</p>
        <h1>{contact ? 'HABLEMOS' : 'MÁS ALLÁ DEL CÓDIGO'}</h1>
        {contact ? (
          <>
            <p className="profile-lead">Si mi perfil encaja con tu equipo o quieres saber más sobre alguno de mis proyectos, estaré encantado de conversar.</p>
            <div className="profile-links">{links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}><span>{link.label}</span><strong>{link.value}</strong><span aria-hidden="true">↗</span></a>)}</div>
          </>
        ) : (
          <>
            <p className="profile-lead">Soy Daniel García Ortega, desarrollador Full Stack de Torrent, Valencia. Me interesa construir soluciones mantenibles y colaborar con equipos en los que pueda seguir aprendiendo.</p>
            <p>Mi recorrido combina desarrollo web, pagos y facturación, extensiones para Microsoft Dynamics 365 Business Central y proyectos académicos con Java, Android y bases de datos. En este portafolio reúno trabajo profesional y proyectos personales para explicar mejor cómo abordo cada problema.</p>
            <div className="profile-facts"><div><span>BASE</span><strong>Torrent, Valencia</strong></div><div><span>ENFOQUE</span><strong>Full Stack · Aplicaciones web</strong></div><div><span>INTERESES</span><strong>Producto, aprendizaje y experiencias digitales</strong></div></div>
          </>
        )}
      </div>
    </main>
  );
}
