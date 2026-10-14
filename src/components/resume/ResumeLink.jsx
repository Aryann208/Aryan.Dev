import { profile } from '../../data/profile';
export default function ResumeLink({
  className,
  children = 'Download resume',
  ...props
}) {
  return (
    <a
      className={className}
      href={profile.resume || '#resume'}
      download={profile.resume ? 'Aryan-Trivedi-Resume.pdf' : undefined}
      {...props}
    >
      {profile.resume ? children : 'Resume'}
      {profile.resume && ' (PDF)'}
    </a>
  );
}
