import { render, screen } from '@testing-library/react';
import Resume from './Resume';
import ResumeLink from './ResumeLink';
import { profile } from '../../data/profile';
const suppliedResume = profile.resume;
beforeEach(() => {
  profile.resume = null;
});
afterEach(() => {
  profile.resume = suppliedResume;
});
test('missing PDF provides an honest email fallback', () => {
  render(
    <>
      <ResumeLink />
      <Resume />
    </>,
  );
  expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
    'href',
    '#resume',
  );
  expect(screen.getByRole('link', { name: /Request resume/i })).toHaveAttribute(
    'href',
    'mailto:aryantrivedi208@gmail.com?subject=Resume%20request',
  );
  expect(
    screen.queryByRole('link', { name: /Download/i }),
  ).not.toBeInTheDocument();
});
test('provided PDF downloads under a recruiter-friendly filename', () => {
  profile.resume = '/Aryan-Trivedi-Resume.pdf';
  render(<ResumeLink />);
  const link = screen.getByRole('link', { name: 'Download resume (PDF)' });
  expect(link).toHaveAttribute('href', '/Aryan-Trivedi-Resume.pdf');
  expect(link).toHaveAttribute('download', 'Aryan-Trivedi-Resume.pdf');
});

test('shared Drive resume opens the supplied public URL in a new tab', () => {
  profile.resume = suppliedResume;
  render(<ResumeLink />);
  const link = screen.getByRole('link', { name: 'View resume (PDF)' });
  expect(link).toHaveAttribute(
    'href',
    'https://drive.google.com/file/d/1xyfVMh-k9vBhASWRcLaLL9mxcwkJp35L/view?usp=sharing',
  );
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  expect(link).not.toHaveAttribute('download');
});
