import { profile } from '../../data/profile';
import ResumeLink from './ResumeLink';
import classes from './Resume.module.css';
export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className={classes.resume}
    >
      <div className={`section-shell ${classes.inner}`}>
        <div>
          <p className="eyebrow">The one-page version</p>
          <h2 id="resume-heading">Experience, at a glance.</h2>
          <p>
            {profile.resume
              ? 'A concise overview of my engineering work, experience and skills.'
              : 'For my latest resume, get in touch by email.'}
          </p>
        </div>
        {profile.resume ? (
          <ResumeLink className="button button-outline" />
        ) : (
          <a
            className="button button-outline"
            href={`mailto:${profile.email}?subject=Resume%20request`}
          >
            Request resume <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  );
}
