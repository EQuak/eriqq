import { useState } from 'react';
import { keyframes, styled } from '../../stitches.config';
import { MobileLinks } from './MobileLinks';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationWrapperProps {
  children?: React.ReactNode;
}

const openAnimation = keyframes({
  from: { top: 0 },
  to: { top: '120px' },
});

const closeAnimation = keyframes({
  from: { top: '120px' },
  to: { top: 0 },
});

function NavigationWrapper({ children }: NavigationWrapperProps) {
  return <NavigationWrap>{children}</NavigationWrap>;
}

export const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { url: '/', label: 'Home', isActive: Boolean(router.pathname === '/') },
    {
      url: '/contact',
      label: 'Contact',
      isActive: Boolean(router.pathname === '/contact'),
    },
    {
      url: '/services',
      label: 'Services',
      isActive: Boolean(router.pathname === '/services'),
    },
    {
      url: '/about-us',
      label: 'About us',
      isActive: Boolean(router.pathname === '/about-us'),
    },
  ];

  return (
    <NavigationWrapper>
      <LogoWrap>
        <Link href="/">
          <img src="melmac-logistics-logo.svg" height={76} width={76} />
        </Link>
      </LogoWrap>
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

const logoHeightLarge = '4rem';
const logoHeight = '3.5rem';
const NavigationWrap = styled('div', {
  width: '100%',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '60px',
  alignItems: 'center',
  padding: '1rem .5rem 0rem .5rem',

  '@tablet': {
    padding: '2rem 2rem 0rem 1.2rem',
  },
});

const LogoWrap = styled('div', {
  minHeight: logoHeight,
  '@tablet': {
    minHeight: logoHeightLarge,
  },
});

const LinksWrap = styled('div', {
  display: 'flex',
  transition: '.3s',

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
        backgroundColor: '$grey',
        opacity: 1,
      },
      false: {
        borderTop: '1px solid $grey',
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
  fontWeight: '$bold',
  fontSize: '$h3',
  textDecoration: 'none',
  color: '$greyBlack',
  whiteSpace: 'noWrap',
  padding: '.5rem 0',
  alignItems: 'center',
  cursor: 'pointer',
  variants: {
    isActive: {
      true: {
        color: '$primary',
        borderBottom: '2px solid $primary',
      },
    },
  },
  '@tablet': {
    padding: '0 0.75rem',
    margin: '0 .25rem',
    display: 'flex',
    height: '2rem',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    transition: '$shortHover',
    '&:hover': {
      // backgroundColor: '#999999',
      opacity: 0.5,
    },
  },
});
