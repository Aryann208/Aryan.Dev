import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { FiPause, FiPlay } from 'react-icons/fi';
import './InfiniteScroll.scss';
const rows = [
  ['React', 'Next.js', 'TypeScript', 'Interfaces'],
  ['Node.js', 'Express', 'REST APIs', 'Services'],
  ['OAuth 2.0', 'OIDC', 'RBAC', 'Identity'],
  ['MongoDB', 'Python', 'MT5', 'Data'],
  ['HMAC', 'Multi-tenancy', 'SSO', 'Architecture'],
];
export default function InfiniteScroll() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  return (
    <div
      className={`stack-motion ${paused || reducedMotion ? 'stack-paused' : ''}`}
    >
      <div className="stack-rows" aria-hidden="true">
        {rows.map((row, i) => (
          <div
            key={i}
            className="stack-row"
            style={{
              '--duration': `${28 + i * 3}s`,
              '--direction': i % 2 ? 'reverse' : 'normal',
            }}
          >
            <div className="stack-track">
              {[0, 1].map((copy) => (
                <div className="stack-copy" key={copy}>
                  {row.map((tag) => (
                    <span className="stack-tag" key={tag}>
                      <span>#</span>
                      {tag}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="stack-sr">
        React, Next.js, TypeScript, Node.js, Express, MongoDB, Python, and
        enterprise identity.
      </p>
      <div className="stack-caption">
        <span>From client to service.</span>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={
            reducedMotion
              ? 'Motion reduced'
              : paused
                ? 'Play motion: technology animation'
                : 'Pause motion: technology animation'
          }
          aria-pressed={paused}
          disabled={!!reducedMotion}
        >
          {paused || reducedMotion ? (
            <FiPlay aria-hidden="true" />
          ) : (
            <FiPause aria-hidden="true" />
          )}
          {reducedMotion
            ? 'Motion reduced'
            : paused
              ? 'Play motion'
              : 'Pause motion'}
        </button>
      </div>
    </div>
  );
}
