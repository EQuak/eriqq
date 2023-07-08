import { styled } from '../../stitches.config';
import { StyledLink } from '../StyledLink';
import { LinkProps } from './AppHeader';

interface WebNavigationProps {
  links: LinkProps[];
  handleClose: (value: boolean) => void;
}

export const WebNavigation = ({
  links,
  handleClose,
}: WebNavigationProps): JSX.Element => {
  return (
    <WebNavigationWrap>
      <nav className="web-nav">
        <ul className="web-list">
          {links.map(({ url, label, isActive }, index) => (
            <li key={`${label}-${index}`}>
              <StyledLink href={url} onClick={() => handleClose(false)}>
                {label}
              </StyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </WebNavigationWrap>
  );
};

const WebNavigationWrap = styled('div', {
  '.web-list': {
    display: 'none',
    '@midDesktop': {
      display: 'flex',
      gap: '1.5rem',
    },
  },
  '.web-nav': {
    display: 'none',
    ul: {
      listStyleType: 'none',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    '@midDesktop': {
      display: 'flex',
      gap: '1rem',
    },
  },
});

export default WebNavigation;
// card box-shadow: 0 0 2rem rgba(0,0,0,.1)
