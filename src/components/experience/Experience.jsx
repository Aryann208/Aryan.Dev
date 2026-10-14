import classes from './Experience.module.css';

const experience = [
  {
    company: 'Techolution Inc.',
    role: 'Full Stack Developer · Project Lead, AppSecAuth',
    start: '2024-01',
    end: '2026-07',
    dates: 'Jan 2024 — Jul 2026',
    summary:
      'Enterprise identity, from first implementation to client delivery.',
    achievements: [
      'Built AppSecAuth from inception and led authentication deliveries for 10+ enterprise clients, with a cross-functional team of 6–8.',
      'Designed multi-tenant identity architecture with organization-scoped RBAC, tenant-aware data access, and reusable SSO infrastructure.',
      'Standardized timestamp-based HMAC request signing across services and integrated OAuth 2.0, OIDC, SAML, Okta, Azure AD, and Google.',
      'Owned complex frontend workflows for an AI-powered document extraction platform, including PDF interactions and synchronized field annotations.',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'NextAuth.js',
      'OAuth / OIDC / SAML',
    ],
  },
  {
    company: 'Atticus AI',
    role: 'Frontend Developer Intern',
    start: '2023-07',
    end: '2023-11',
    dates: 'Jul 2023 — Nov 2023',
    summary:
      'Bringing a legal technology workflow into the tools lawyers already use.',
    achievements: [
      'Developed the web application frontend with React and TypeScript.',
      'Identified the friction of switching between Microsoft Word and a separate web app, proposed a Word add-in, and independently built its interface.',
    ],
    technologies: ['React', 'TypeScript', 'Microsoft Word add-in'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className={classes.Experience}
      aria-labelledby="experience-heading"
    >
      <div className="section-shell">
        <div className={classes.Header}>
          <div>
            <p className="eyebrow">Professional experience</p>
            <h2 id="experience-heading" className="section-heading">
              Built with teams.
              <br />
              Delivered for people.
            </h2>
          </div>
          <p className={classes.HeaderNote}>
            Hands-on engineering, architectural ownership, and a close
            connection to the product.
          </p>
        </div>
        <div className={classes.Roles}>
          {experience.map((item, index) => (
            <article className={classes.Role} key={item.company}>
              <div className={classes.RoleMeta}>
                <span className={classes.Number} aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{item.company}</h3>
                <p className={classes.RoleTitle}>{item.role}</p>
                <p className={classes.Dates}>
                  <time dateTime={item.start}>
                    {item.dates.split(' — ')[0]}
                  </time>
                  {' — '}
                  <time dateTime={item.end}>{item.dates.split(' — ')[1]}</time>
                </p>
              </div>
              <div className={classes.RoleBody}>
                <p className={classes.Summary}>{item.summary}</p>
                <ul className={classes.Achievements}>
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <ul
                  className={classes.Technologies}
                  aria-label={`${item.company} technologies`}
                >
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
