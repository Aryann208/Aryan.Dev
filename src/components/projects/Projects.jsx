import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import classes from './Projects.module.css';
import tmdb from '../assets/images/tmdb1.jpg';
import delicious from '../assets/images/recipe1.jpg';
import metaverse from '../assets/images/metaverse1.jpg';
import crwn from '../assets/images/crwn1.jpg';

const earlierWork = [
  {
    name: 'TMDB',
    description: 'Movie discovery with API-driven search and Redux.',
    image: tmdb,
    // Browser audit: the shell loads, but movie API requests time out.
    demo: null,
    repository: 'https://github.com/Aryann208/TMDB',
  },
  {
    name: 'Delicious',
    description: 'A recipe explorer built with React and Styled Components.',
    image: delicious,
    demo: 'https://react-recipes-mauve.vercel.app/',
    repository: 'https://github.com/Aryann208/React-Recipes',
  },
  {
    name: 'Metaverse',
    description: 'An exploration of expressive interfaces and Framer Motion.',
    image: metaverse,
    demo: 'https://metaverse-p92w.vercel.app/',
    repository: 'https://github.com/Aryann208/Metaverse',
  },
  {
    name: 'CRWN Clothing',
    description: 'A React storefront with a shared shopping-cart state.',
    image: crwn,
    demo: 'https://crwn-clothing-jet.vercel.app/',
    repository: 'https://github.com/Aryann208/Crwn-clothing',
  },
];

function ExternalLink({ href, children, className, label }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
    >
      {children}
    </a>
  );
}

function TechTags({ items }) {
  return (
    <ul
      className={classes.tags}
      aria-label="Technologies and engineering themes"
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CaseStudy({ title, sections }) {
  return (
    <details className={classes.caseStudy}>
      <summary aria-label={`View case study: ${title}`}>
        View case study{' '}
        <span className={classes.disclosureIcon} aria-hidden="true">
          +
        </span>
      </summary>
      <dl className={classes.caseStudyBody}>
        {sections.map(([heading, text]) => (
          <div key={heading}>
            <dt>{heading}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

function IdentityIllustration() {
  return (
    <figure
      className={classes.illustration}
      aria-label="Illustration of identity providers connecting through shared authentication to separate organization access scopes"
    >
      <div className={classes.visualHeading}>
        <span>Identity & access</span>
        <span className={classes.illustrationBadge}>Concept illustration</span>
      </div>
      <div className={classes.providerRow} aria-hidden="true">
        <span>OIDC</span>
        <span>SAML</span>
        <span>OAuth 2.0</span>
      </div>
      <div className={classes.connector} aria-hidden="true" />
      <div className={classes.identityHub}>
        <span className={classes.hubSymbol} aria-hidden="true">
          a.
        </span>
        <strong>Shared authentication</strong>
        <span>SSO · tenant configuration · RBAC</span>
      </div>
      <div className={classes.connector} aria-hidden="true" />
      <div className={classes.scopeRow}>
        <div>
          <span className={classes.scopeDot} aria-hidden="true" />
          <strong>Organization A</strong>
          <span>Scoped roles & access</span>
        </div>
        <div>
          <span className={classes.scopeDot} aria-hidden="true" />
          <strong>Organization B</strong>
          <span>Scoped roles & access</span>
        </div>
      </div>
      <figcaption>Reusable identity. Organization-aware access.</figcaption>
    </figure>
  );
}

function DocumentIllustration() {
  return (
    <figure
      className={`${classes.illustration} ${classes.documentIllustration}`}
      aria-label="Concept illustration showing a user selection matched to an AI-detected document region and connected to an extracted field"
    >
      <div className={classes.visualHeading}>
        <span>Document → structured data</span>
        <span className={classes.illustrationBadge}>Concept illustration</span>
      </div>
      <div className={classes.documentFlow}>
        <div className={classes.documentPage} aria-hidden="true">
          <span className={classes.pageTitle}>DOCUMENT</span>
          <span className={classes.textLine} />
          <span className={`${classes.textLine} ${classes.shortLine}`} />
          <span className={classes.textLine} />
          <span className={classes.textLine} />
          <div className={classes.detectedRegion}>
            <span>Total</span>
            <strong>Extracted value</strong>
          </div>
          <div className={classes.userSelection}>
            <span>User selection</span>
          </div>
          <span className={classes.textLine} />
          <span className={`${classes.textLine} ${classes.shortLine}`} />
        </div>
        <span className={classes.flowArrow} aria-hidden="true">
          →
        </span>
        <div className={classes.extractedField}>
          <span className={classes.fieldEyebrow}>Matched field</span>
          <strong>Invoice total</strong>
          <span className={classes.fieldLine} />
          <span>Document region ↔ field</span>
          <span className={classes.fieldStatus}>
            <span aria-hidden="true">✓</span> Linked selection
          </span>
        </div>
      </div>
      <div className={classes.legend}>
        <span>
          <i className={classes.regionKey} /> AI-detected region
        </span>
        <span>
          <i className={classes.selectionKey} /> User selection
        </span>
      </div>
      <figcaption>
        Connecting document coordinates to an editable schema.
      </figcaption>
    </figure>
  );
}

function ProjectFeature({
  children,
  visual,
  dark = false,
  tone,
  reverse = false,
  id,
}) {
  const reduceMotion = useReducedMotion();
  return (
    <article
      id={id}
      className={`${classes.feature} ${dark ? classes.dark : classes.light} ${tone === 'crimson' ? classes.crimson : ''}`}
    >
      <m.div
        className={`section-shell ${classes.featureGrid} ${reverse ? classes.reversed : ''}`}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className={classes.featureContent}>{children}</div>
        <div className={classes.featureVisual}>{visual}</div>
      </m.div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className={classes.projects}
      aria-labelledby="projects-heading"
    >
      <div className={classes.sectionIntro}>
        <div className={`section-shell ${classes.introGrid}`}>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-heading" className="section-heading">
              Built with purpose.
            </h2>
          </div>
          <p>
            From a personal financial analytics platform to enterprise systems,
            a closer look at the problems I work on.
          </p>
        </div>
      </div>

      <ProjectFeature
        id="macrointel"
        dark
        visual={
          <figure className={classes.appPreview}>
            <div className={classes.previewLabel}>
              <span>MacroIntel</span>
              <span>Live application</span>
            </div>
            <img
              src="/images/macrointel.jpg"
              width="1120"
              height="760"
              loading="lazy"
              decoding="async"
              alt="MacroIntel demo-account analytics showing completed positions, win rate, trade profit and loss, and performance charts"
            />
            <figcaption>
              Actual application · MT5 demo-account analytics.
            </figcaption>
          </figure>
        }
      >
        <p className={classes.projectCategory}>
          01 / Personal project · Financial analytics
        </p>
        <h3 className={classes.projectTitle}>MacroIntel</h3>
        <p className={classes.projectDescription}>
          Economic context and trading performance, connected in one full-stack
          application.
        </p>
        <TechTags
          items={[
            'Next.js',
            'TypeScript',
            'Express',
            'MongoDB',
            'Python',
            'MT5',
          ]}
        />
        <ul className={classes.highlights}>
          <li>FRED indicators, release calendars and personal watchlists.</li>
          <li>
            Demo-account synchronization and completed-trade reconstruction from
            broker deals.
          </li>
          <li>
            Filterable trade history, account statistics and performance charts.
          </li>
        </ul>
        <div className={classes.projectActions}>
          <ExternalLink
            href="https://macrointel-web.onrender.com/integrations"
            className="button button-primary"
            label="Explore the MacroIntel live demo"
          >
            Live demo <BsArrowUpRight aria-hidden="true" />
          </ExternalLink>
          <ExternalLink
            href="https://github.com/Aryann208/MacroIntel-Fullstack"
            className={`button button-outline ${classes.sourceButton}`}
            label="View MacroIntel source on GitHub"
          >
            <BsGithub aria-hidden="true" /> Source
          </ExternalLink>
        </div>
        <CaseStudy
          title="MacroIntel"
          sections={[
            [
              'Problem',
              'Economic releases and trading-account records are separate data streams. I wanted one place to follow macro indicators and understand completed trading activity.',
            ],
            [
              'My contribution',
              'Built the web application, authenticated APIs and Python connector, including watchlists, change tracking, account synchronization and trading-history views.',
            ],
            [
              'Engineering',
              'Connected FRED histories and calendars to a Next.js interface and Express/MongoDB backend. Reconstructed completed trades from broker deals instead of treating each deal as a separate trade, then exposed paginated, filterable history.',
            ],
            [
              'Result',
              'A working personal analytics application with economic data and an MT5 demo-account workflow, including account statistics and performance charts.',
            ],
          ]}
        />
      </ProjectFeature>

      <ProjectFeature
        id="authentication-case-study"
        reverse
        visual={<IdentityIllustration />}
      >
        <p className={classes.projectCategory}>
          02 / Professional case study · Techolution
        </p>
        <h3 className={classes.projectTitle}>
          Identity, built
          <br /> to be reused.
        </h3>
        <p className={classes.projectDescription}>
          AppSecAuth: shared authentication infrastructure for enterprise
          products and tenant-specific access.
        </p>
        <TechTags items={['React', 'Node.js', 'OIDC / SAML', 'RBAC', 'HMAC']} />
        <ul className={classes.highlights}>
          <li>Enterprise SSO and tenant-specific identity configurations.</li>
          <li>Organization-scoped roles and tenant-aware data access.</li>
          <li>Timestamp-based HMAC authentication between services.</li>
        </ul>
        <CaseStudy
          title="Enterprise Authentication Platform"
          sections={[
            [
              'Problem',
              'Enterprise products need consistent sign-in and authorization while accommodating different organizations, identity providers and access rules.',
            ],
            [
              'My contribution',
              'Built AppSecAuth from inception, designed multi-tenant identity architecture and led a cross-functional team of 6–8 while remaining hands-on across the stack.',
            ],
            [
              'Engineering',
              'Developed reusable SSO and RBAC infrastructure with OAuth 2.0, OIDC and SAML integrations. Standardized timestamp-based HMAC request signing and verification across microservices, with organization-aware authorization and data access.',
            ],
            [
              'Result',
              'Reusable authentication capabilities delivered across 10+ enterprise client deployments.',
            ],
          ]}
        />
      </ProjectFeature>

      <ProjectFeature
        id="document-extraction-case-study"
        dark
        tone="crimson"
        visual={<DocumentIllustration />}
      >
        <p className={classes.projectCategory}>
          03 / Professional case study · Techolution
        </p>
        <h3 className={classes.projectTitle}>
          Making AI output
          <br /> usable.
        </h3>
        <p className={classes.projectDescription}>
          An interactive document-extraction workflow that connects AI-suggested
          fields to the exact regions people see.
        </p>
        <TechTags
          items={[
            'React',
            'PDF canvas',
            'Coordinate mapping',
            'State management',
          ]}
        />
        <ul className={classes.highlights}>
          <li>Synchronized PDF annotations and extracted-field panels.</li>
          <li>Coordinate-aware matching for imprecise user selections.</li>
          <li>Schema-building and document-extraction workflows.</li>
        </ul>
        <CaseStudy
          title="AI Document Extraction"
          sections={[
            [
              'Problem',
              'AI-extracted fields become useful when people can locate them on a document, check the suggestion and adjust the extraction schema. User-drawn selections rarely align perfectly with detected regions.',
            ],
            [
              'My contribution',
              'Owned complex frontend workflows: an interactive PDF canvas, suggested-field panels, synchronized highlights, selection matching and schema-building interactions.',
            ],
            [
              'Engineering',
              'Used document-element coordinates returned by an AI processing service to match imprecise selections with detected regions, keeping canvas annotations, selected fields and editable schema state in sync.',
            ],
            [
              'Result',
              'A connected review workflow where users could move between a document and its extracted fields, refine selections and build extraction schemas.',
            ],
          ]}
        />
      </ProjectFeature>

      <div className={classes.earlierWork}>
        <div className="section-shell">
          <div className={classes.earlierHeading}>
            <div>
              <p className="eyebrow">Where it started</p>
              <h3>Earlier work.</h3>
            </div>
            <p>
              Smaller frontend projects that shaped my approach to interfaces.
            </p>
          </div>
          <div className={classes.earlierGrid}>
            {earlierWork.map((project) => (
              <article className={classes.earlierCard} key={project.name}>
                <img
                  src={project.image}
                  alt={`${project.name} project interface`}
                  width="320"
                  height="200"
                  loading="lazy"
                  decoding="async"
                />
                <div className={classes.earlierContent}>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <div className={classes.earlierLinks}>
                    {project.demo && (
                      <ExternalLink
                        href={project.demo}
                        className="text-link"
                        label={`Open ${project.name} live demo`}
                      >
                        Demo <BsArrowUpRight aria-hidden="true" />
                      </ExternalLink>
                    )}
                    <ExternalLink
                      href={project.repository}
                      className="text-link"
                      label={`View ${project.name} source on GitHub`}
                    >
                      Source <BsGithub aria-hidden="true" />
                    </ExternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
