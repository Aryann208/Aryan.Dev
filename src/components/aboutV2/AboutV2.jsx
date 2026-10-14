import ResumeLink from '../resume/ResumeLink';
import classes from './AboutV2.module.css';

const highlights = [
  ['~3 years', 'of professional experience'],
  ['10+ clients', 'enterprise authentication deliveries'],
  ['6–8 people', 'cross-functional team leadership'],
];

export default function AboutV2() {
  return (
    <section
      id="about"
      className={classes.About}
      aria-labelledby="about-heading"
    >
      <div className="section-shell">
        <div className={classes.Intro}>
          <div>
            <p className="eyebrow">A little about me</p>
            <h2
              id="about-heading"
              className={`section-heading ${classes.Heading}`}
            >
              Across the stack.
              <br />
              Close to the product.
            </h2>
          </div>
          <div className={classes.Description}>
            <p className={classes.Lead}>
              I’m Aryan, a Full Stack Engineer who enjoys making complex
              products feel straightforward to use.
            </p>
            <p>
              My work spans React and Next.js interfaces, Node.js services, and
              the authentication architecture that connects them. At
              Techolution, I helped build enterprise identity products from
              inception to client delivery, leading a cross-functional team
              while staying hands-on.
            </p>
            <p>
              I’ve also built interaction-heavy document extraction workflows
              and a Word add-in for legal teams. Today, I’m bringing that same
              product thinking to MacroIntel, my full-stack financial analytics
              project.
            </p>
            <div className={classes.Actions}>
              <a className="text-link" href="#experience">
                Explore my experience <span aria-hidden="true">↗</span>
              </a>
              <ResumeLink className="text-link" />
            </div>
          </div>
        </div>
        <dl className={classes.Highlights}>
          {highlights.map(([value, label]) => (
            <div key={value}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
