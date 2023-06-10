import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { colors, styled } from '../../stitches.config';

interface LinkProps {
  url: string;
  label: string;
  isActive: boolean;
}

export const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const links: LinkProps[] = [
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

  return (
    <NavBar>
      <StyledLink
        className="logo"
        isActive={Boolean(router.pathname === '/')}
        href={'/'}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Eriq Quatkemeyer
      </StyledLink>
      <label className="nav-toggle">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
      </label>
      <div className="menu">
        {links.map(({ url, label, isActive }, index) => (
          <li key={`${label}-${index}`}>
            <StyledLink
              key={`${label}-${index}`}
              href={url}
              isActive={isActive}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </StyledLink>
          </li>
        ))}
      </div>
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled('div', {
  backgroundColor: '$blue',
  position: 'fixed',
  width: '100%',

  div: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    overflow: 'hidden',
  },
  'li a': {
    display: 'block',
    padding: '.5rem',
    '@tablet': {
      padding: '.25rem',
    },
  },

  'li a:hover, .menu-btn:hover': {
    opacity: 0.6,
  },

  '.logo': {
    display: 'block',
    position: 'absolute',
    top: '.75rem',
    left: '1rem',
    textDecoration: 'none',
    '@tablet': {
      top: '1.5rem',
      left: '1.5rem',
    },
  },

  '.nav-toggle:has(input:checked) ~ .menu': {
    maxHeight: '240px',
  },

  '.nav-toggle': {
    cursor: 'pointer',
    display: 'inline-block',
    float: 'right',
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    // width: '60px',
    // height: '60px',
  },

  '.nav-toggle input': {
    appearance: 'none',
    padding: 0,
    margin: 0,
    outline: 'none',
    pointerEvents: 'none',
  },

  '.nav-toggle > input': {
    position: 'relative',
    width: '32px',
    height: '2px',
    background: '$greyBlack',
    transition: 'all 0.45s ease-in-out',
  },

  '.nav-toggle > input::before, .nav-toggle > input::after': {
    content: '',
    position: 'absolute',
    height: '2px',
    background: '$greyBlack',
    borderRadius: '2px',
    transition: 'all 0.45s ease-in-out',
  },

  '.nav-toggle > input::before': {
    width: '25px',
    transform: 'translateY(-8px)',
    right: 0,
  },

  '.nav-toggle > input::after': {
    width: '32px',
    transform: 'translateY(8px)',
  },

  '.nav-toggle:has(input:checked) > input': {
    transform: 'translateX(-40px)',
    background: 'transparent',
  },

  '.nav-toggle:has(input:checked) > input::before': {
    width: '32px',
    transform: 'rotate(45deg) translate(26px, -26px)',
  },

  '.nav-toggle:has(input:checked) > input::after': {
    transform: 'rotate(-45deg) translate(26px, 26px)',
  },

  '.menu': {
    clear: 'both',
    maxHeight: 0,
    transition: 'max-height 0.45s ease-out',
    paddingTop: '60px',
    '@tablet': {
      paddingTop: '80px',
    },
  },
  '@tablet': {
    '.nav-toggle': {
      display: 'none',
    },
    li: {
      float: 'left',
    },
    'li a': {
      marginLeft: '1rem',
    },
    '.menu': {
      paddingTop: '0px',
      position: 'fixed',
      clear: 'none',
      float: 'right',
      top: '1rem',
      right: '1rem',
      maxHeight: 'none',

      '@tablet': {
        top: '1.5rem',
        right: '1.5rem',
      },
    },
  },
});

const StyledLink = styled(Link, {
  fontWeight: '$semiBold',
  fontSize: '$h3',
  color: colors.background,
  alignItems: 'center',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '0.25rem',
  variants: {
    isActive: {
      true: {
        border: '3px solid $primary',
      },
      false: {
        border: '3px solid $blue',
      },
    },
  },
  '@tablet': {
    alignItems: 'center',
    '&:hover': {
      opacity: 0.5,
    },
  },
});
