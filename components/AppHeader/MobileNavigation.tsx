import { styled } from '../../stitches.config';
import ContentContainer from '../ContentContainer';
import { StyledLink } from '../StyledLink';
import { LinkProps } from './AppHeader';

interface MobileNavigationProps {
  isOpen: boolean;
  links: LinkProps[];
  handleClose: (value: boolean) => void;
}

export const MobileNavigation = ({
  isOpen,
  links,
  handleClose,
}: MobileNavigationProps): JSX.Element => {
  return (
    <MobileNavigationWrap>
      <nav className={isOpen ? 'mobile-nav isOpen' : 'mobile-nav'}>
        <ContentContainer css={{ margin: '0', paddingTop: '1rem' }}>
          <ul className="mobile-list">
            {links.map(({ url, label, isActive }, index) => (
              <li key={`${label}-${index}`}>
                <StyledLink
                  href={url}
                  onClick={() => {
                    handleClose(false);
                  }}
                >
                  {label}
                </StyledLink>
              </li>
            ))}
          </ul>
        </ContentContainer>
      </nav>
    </MobileNavigationWrap>
  );
};

const MobileNavigationWrap = styled('div', {
  '.mobile-nav': {
    transform: 'translateX(100%)',
    position: 'fixed',
    overflow: 'hidden',
    top: 0,
    paddingTop: '80px',
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    transition: '.5s',
    backgroundColor: 'white',
    zIndex: 900,

    ul: {
      listStyleType: 'none',
      paddingTop: '80px',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },

    '@largeDesktop': {
      top: 95,
    },
  },

  '.mobile-nav.isOpen': {
    transform: 'translateX(0)',
  },

  '.mobile-list': {
    display: 'flex',
    flexDirection: 'column',
    // a: {
    //   borderBottom: '1px solid background',
    //   margin: '0.5rem',

    //   '&:hover': {
    //     borderBottom: '1px solid black',
    //   },
    // },
    li: {
      padding: '.25rem 0 .5rem .75rem',
    },
  },

  '@largeDesktop': {
    '.mobile-nav.isOpen': {
      transform: 'translateX(100%)',
    },
  },
});

export default MobileNavigation;
