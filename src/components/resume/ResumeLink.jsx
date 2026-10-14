import { profile } from '../../data/profile';
export default function ResumeLink({
  className,
  children,
  ...props
}) {
  const isExternal = /^https?:\/\//.test(profile.resume || '');
  const label = children || (isExternal ? 'View resume' : 'Download resume');
  return (
    <a
      className={className}
      href={profile.resume || '#resume'}
      download={profile.resume && !isExternal ? 'Aryan-Trivedi-Resume.pdf' : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {profile.resume ? label : 'Resume'}
      {profile.resume && ' (PDF)'}
    </a>
  );
}
