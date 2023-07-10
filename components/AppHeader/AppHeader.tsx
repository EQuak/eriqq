import { useRouter } from 'next/router';
import { styled } from '../../stitches.config';
import { useState } from 'react';
import { Text } from '../Text';
import { Toggle } from '../Toggle';
import { useScrollDirection } from '../../hooks';
import { testSlideDown, testSlideUp } from '../../styles/KeyFrames';
import { MobileNavigation } from './MobileNavigation';
import { WebNavigation } from './WebNavigation';
import StyledLink from '../StyledLink';

export interface LinkProps {
  url: string;
  label: string;
  isActive: boolean;
}

export const AppHeader = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { isFixed, isDismissed } = useScrollDirection();

  const mobileLinks: LinkProps[] = [
    {
      url: '/',
      label: 'Home',
      isActive: Boolean(router.pathname === '/'),
    },
    {
      url: '/contact',
      label: 'Contact Me',
      isActive: Boolean(router.pathname === '/contact'),
    },
    {
      url: '/resume',
      label: 'Resume',
      isActive: Boolean(router.pathname === '/resume'),
    },
  ];

  const webLinks: LinkProps[] = [
    {
      url: '/',
      label: 'Home',
      isActive: Boolean(router.pathname === '/'),
    },
    {
      url: '/contact',
      label: 'Contact Me',
      isActive: Boolean(router.pathname === '/contact'),
    },
    {
      url: '/resume',
      label: 'Resume',
      isActive: Boolean(router.pathname === '/resume'),
    },
  ];

  const handleToggleClick = (isOpen: boolean) => {
    const bodyElement = document.getElementById('body');
    setIsOpen(isOpen);

    if (isOpen && bodyElement) {
      bodyElement.classList.add('is-open');
    } else if (!isOpen && bodyElement) {
      bodyElement?.classList.remove('is-open');
    }
  };

  return (
    <NavigationWrap>
      <nav
        className={`nav nav--primary ${isFixed ? 'is-fixed' : ''} ${
          isDismissed ? 'is-dismissed' : ''
        }`}
      >
        <div className="row">
          <LogoWrap>
            <StyledLink
              className="logo"
              // isActive={Boolean(router.pathname === '/')}
              href={'/'}
              onClick={() => {
                if (isOpen) {
                  handleToggleClick(!isOpen);
                } else {
                }
              }}
            >
              Eriq Quatkemeyer
            </StyledLink>
          </LogoWrap>
          <WebNavigation links={webLinks} handleClose={setIsOpen} />
          <Toggle
            className={'nav-toggle'}
            isChecked={isOpen}
            handleToggleClick={handleToggleClick}
          />
        </div>
      </nav>
      <MobileNavigation
        isOpen={isOpen}
        links={mobileLinks}
        handleClose={handleToggleClick}
      />
    </NavigationWrap>
  );
};

const NavigationWrap = styled('header', {
  '.nav-toggle': {
    display: 'block',

    '@midDesktop': {
      display: 'none',
    },
  },
  '.nav': {
    padding: 0,
    width: '100%',
    display: 'block',
    zIndex: 999,

    '.row': {
      padding: '0 2rem',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
      maxWidth: '81.25rem',

      '@largeDesktop': {
        padding: '0rem',
        maxWidth: '76.875rem',
      },
    },
  },

  '.nav--primary': {
    display: 'block',
    zIndex: 1000,
    padding: 0,
    height: '80px',
    backgroundColor: 'transparent',
    borderBottom: 'none',
    top: '0px',
    position: 'absolute',
    '@midDesktop': {
      padding: '0 10px',
    },
  },

  '.is-dismissed': {
    position: 'fixed',
    top: '-80px !important',
    animation: `${testSlideUp} 420ms cubic-bezier(.165,.84,.44,1) !important`,
    transition: 'top 420ms cubic-bezier(.165,.84,.44,1) !important',
    '.row': {
      backgroundColor: '$white',
    },
  },

  '.is-fixed': {
    display: 'block',
    backgroundColor: 'transparent',
    position: 'fixed',
    borderRadius: 'none',
    boxShadow: '0 4px 40px rgba(0,0,0,.08)',
    top: '0px',
    animation: `${testSlideDown} 420ms cubic-bezier(.165,.84,.44,1)`,
    '@midDesktop': {
      boxShadow: 'none',
    },
    '.row': {
      background: 'url(assets/blob-scene-haikei.svg) no-repeat fixed',
      backgroundSize: 'cover',

      '@midDesktop': {
        borderRadius: '25px',

        boxShadow: '0 4px 40px rgba(0,0,0,.08)',
        marginTop: '.5rem',
        padding: '0 2.225rem',
      },
    },
  },
});

const LogoWrap = styled('div', {
  float: 'left',
  margin: 0,
  width: '100%',
  maxWidth: '50%',
  lineHeight: 1,
  display: 'inline-block',
  transition: 'width 1s, padding 0.3s',
});

export default AppHeader;
