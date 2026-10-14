import ReactLogo from '../assets/images/React-05.svg';
import NextLogo from '../assets/images/Nextjs-01.svg';
import NodeLogo from '../assets/images/Node-JS-02.svg';
import MongoLogo from '../assets/images/mongodb.svg';
import GitHubLogo from '../assets/images/github.svg';
import classes from './Skills.module.css';

const logos = {
  React: ReactLogo,
  'Next.js': NextLogo,
  'Node.js': NodeLogo,
  MongoDB: MongoLogo,
  GitHub: GitHubLogo,
};

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux Toolkit',
      'TanStack Query',
      'Tailwind CSS',
      'SCSS',
      'Material UI',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Zod', 'WebSockets'],
  },
  {
    title: 'Identity & security',
    skills: ['OAuth 2.0', 'OIDC', 'SAML', 'RBAC', 'HMAC'],
  },
  {
    title: 'Data & infrastructure',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Docker',
      'GCP',
      'Azure',
    ],
  },
  {
    title: 'Tools & testing',
    skills: ['Git', 'GitHub', 'pnpm', 'Vitest', 'Claude Code', 'OpenAI Codex'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={classes.Skills}
      aria-labelledby="skills-heading"
    >
      <div className="section-shell">
        <div className={classes.Header}>
          <div>
            <p className="eyebrow">Skills & tools</p>
            <h2 id="skills-heading" className="section-heading">
              The tools behind
              <br />
              the work.
            </h2>
          </div>
          <p>
            From the interface to the API, identity layer, and data underneath.
          </p>
        </div>
        <div className={classes.Groups}>
          {skillGroups.map((group, index) => (
            <div className={classes.Group} key={group.title}>
              <h3>
                <span aria-hidden="true">0{index + 1}</span>
                {group.title}
              </h3>
              <ul className={classes.List}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    {logos[skill] && (
                      <img
                        src={logos[skill]}
                        alt=""
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    )}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
