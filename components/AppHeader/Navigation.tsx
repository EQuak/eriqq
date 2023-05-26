import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { MobileLinks } from './MobileLinks';

import { styled } from '../../stitches.config';

interface NavigationWrapperProps {
  children?: React.ReactNode;
}

function NavigationWrapper({ children }: NavigationWrapperProps) {
  return <NavigationWrap>{children}</NavigationWrap>;
}

export const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    // {
    //   url: '/about-me',
    //   label: 'About me',
    //   isActive: Boolean(router.pathname === '/about-me'),
    // },
    // {
    //   url: '/experience',
    //   label: 'Experience',
    //   isActive: Boolean(router.pathname === '/experience'),
    // },
    // {
    //   url: '/',
    //   label: 'Home',
    //   isActive: Boolean(router.pathname === '/'),
    // },
    {
      url: '/contact',
      label: 'Contact Me',
      isActive: Boolean(router.pathname === '/contact'),
    },
  ];

  return (
    <NavigationWrapper>
      <StyledLink
        isActive={Boolean(router.pathname === '/')}
        href={'/'}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Eriq Quatkemeyer
      </StyledLink>
      <MobileLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      <LinksWrap isOpen={isOpen}>
        {links.map(({ url, label, isActive }, index) => (
          <StyledLink
            isActive={isActive}
            href={url}
            key={`${label}-${index}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {label}
          </StyledLink>
        ))}
      </LinksWrap>
    </NavigationWrapper>
  );
};

export default Navigation;

const NavigationWrap = styled('div', {
  width: '100%',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '60px',
  alignItems: 'center',
  padding: '1.5rem 1.5rem 0rem 1.5rem',
  height: '6rem',
  '@tablet': {
    height: 'auto',
    padding: '2rem 2rem 1rem 2rem',
  },
});

const LinksWrap = styled('div', {
  display: 'flex',
  transition: '.3s',
  backgroundColor: '$background',

  variants: {
    isOpen: {
      true: {
        width: '100%',
        a: {
          width: '100%',
          textAlign: 'center',
          '&:hover': {
            opacity: 0.4,
          },
        },

        position: 'fixed',
        top: '95px',
        left: '0px',
        flexDirection: 'column',
        backgroundColor: '$background',
        opacity: 1,
      },
      false: {
        borderTop: '1px solid $background',
        position: 'fixed',
        left: '0px',
        bottom: '100%',
        '@tablet': {
          display: 'flex',
          position: 'relative',
        },
      },
    },
  },
});

const StyledLink = styled(Link, {
  alignSelf: 'center',
  fontWeight: '$semiBold',
  fontSize: '$h3',
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: '$primary',
  whiteSpace: 'noWrap',
  padding: '.5rem 0',
  alignItems: 'center',

  cursor: 'pointer',
  variants: {
    isActive: {
      true: {
        fontWeight: '$bold',
        borderBottom: '2px solid $primary',
      },
      false: {
        borderBottom: '2px solid $background',
        margin: '0rem',
        padding: '0rem',
      },
    },
  },
  '@tablet': {
    padding: '0 0.75rem',
    margin: '0 .25rem',
    display: 'flex',
    height: '2rem',
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    transition: '$shortHover',
    '&:hover': {
      opacity: 0.5,
    },
  },
});
