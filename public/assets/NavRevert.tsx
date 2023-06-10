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
    <TestNavBar>
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
        <input type="checkbox" />
      </label>
      <ul className="menu">
        {links.map(({ url, label, isActive }, index) => (
          <li key={`${label}-${index}`}>
            <StyledLink href={url} isActive={isActive}>
              {label}
            </StyledLink>
          </li>
        ))}
      </ul>
      {/* <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        {links.map(({ url, label, isActive }, index) => (
          <li>
            <StyledLink
              href={url}
              isActive={isActive}
              key={`${label}-${index}`}
            >
              {label}
            </StyledLink>
          </li>
        ))}
      </ul> */}
      {/* <div className={`nav-items ${isOpen && 'open'}`}>
        {links.map(({ url, label, isActive }, index) => (
          <StyledLink href={url} isActive={isActive} key={`${label}-${index}`}>
            {label}
          </StyledLink>
        ))}
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div> */}
    </TestNavBar>
  );
};

export default Navigation;

const TestNavBar = styled('div', {
  backgroundColor: 'tomato',
  // height: '60px',
  position: 'fixed',
  width: '100%',
  // alignItems: 'center',
  // display: 'flex',
  // justifyContent: 'space-between',
  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  'li a': {
    display: 'block',
    padding: '20px 20px',
    borderRight: '1px solid #f4f4f4',
    textDecoration: 'none',
  },

  'li a:hover, .menu-btn:hover': {
    backgroundColor: '#f4f4f4',
  },

  '.logo': {
    display: 'block',
    float: 'left',
    padding: '10px 20px',
    textDecoration: 'none',
  },

  '.nav-toggle:has(input:checked) ~ .menu': {
    maxHeight: '240px',
  },

  '.nav-toggle': {
    cursor: 'pointer',
    display: 'inline-block',
    float: 'right',
    position: 'relative',
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
    transition: 'max-height .2s ease-out',
  },
  '@tablet': {
    '.nav-toggle': {
      display: 'none',
    },
    li: {
      float: 'left',
    },
    'li a': {
      padding: '20px 30px',
    },
    '.menu': {
      clear: 'none',
      float: 'right',
      maxHeight: 'none',
    },
  },
});

// const NavBar = styled('div', {
//   backgroundColor: '#fff',
//   boxShadow: '1px 1px 4px 0 rgba(0,0,0,.1)',
//   position: 'fixed',
//   width: '100%',
//   zIndex: 3,
//   ul: {
//     margin: 0,
//     padding: 0,
//     listStyle: 'none',
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//   },

//   'li a': {
//     display: 'block',
//     padding: '20px 20px',
//     borderRight: '1px solid #f4f4f4',
//     textDecoration: 'none',
//   },

//   'li a:hover, .menu-btn:hover': {
//     backgroundColor: '#f4f4f4',
//   },

//   '.logo': {
//     display: 'block',
//     float: 'left',
//     padding: '10px 20px',
//     textDecoration: 'none',
//   },

//   /* menu */

//   '.menu': {
//     clear: 'both',
//     maxHeight: 0,
//     transition: 'max-height .2s ease-out',
//   },

//   /* menu icon */

//   '.menu-icon': {
//     cursor: 'pointer',
//     display: 'inline-block',
//     float: 'right',
//     padding: '28px 20px',
//     position: 'relative',
//     userSelect: 'none',
//   },

//   '.menu-icon .navicon': {
//     background: '#333',
//     display: 'block',
//     height: '2px',
//     position: 'relative',
//     transition: 'background .2s ease-out',
//     width: '18px',
//   },

//   '.menu-icon .navicon:before, .menu-icon .navicon:after': {
//     background: '#333',
//     content: '',
//     display: 'block',
//     height: '100%',
//     position: 'absolute',
//     transition: 'all .2s ease-out',
//     width: '100%',
//   },

//   '.menu-icon .navicon:before': {
//     top: '5px',
//   },

//   '.menu-icon .navicon:after': {
//     top: '-5px',
//   },

//   /* menu btn */

//   '.menu-btn': {
//     display: 'none',
//   },

//   '.menu-btn:checked ~ .menu': {
//     maxHeight: '240px',
//   },

//   '.menu-btn:checked ~ .menu-icon .navicon': {
//     background: 'transparent',
//   },

//   '.menu-btn:checked ~ .menu-icon .navicon:before': {
//     transform: 'rotate(-45deg)',
//   },

//   '.menu-btn:checked ~ .menu-icon .navicon:after': {
//     transform: 'rotate(45deg)',
//   },

//   '.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before, .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after':
//     {
//       top: 0,
//     },

//   '@tablet': {
//     li: {
//       float: 'left',
//     },
//     'li a': {
//       padding: '20px 30px',
//     },
//     '.menu ': {
//       clear: 'none',
//       float: 'right',
//       maxHeight: 'none',
//     },
//     '.menu-icon': {
//       display: 'none',
//     },
//   },
// });

const NavBar = styled('div', {
  width: 'inherit',
  height: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#5265c4',
  padding: '1rem 1rem',
  '@tablet': {
    padding: '1rem 2rem',
  },
  '.nav-logo': {
    margin: '15px',
    color: '#ffffff',
  },
  '.nav-items': {
    // transition: 'translate var(--animation-timing)',
    translate: '-100%',
    // clear: 'none',
    // float: 'right',
    // maxHeight: 'none', //
    gap: '.5rem',
    height: 'fit-content',
  },
  '.nav-items.false > a:last-of-type': {
    marginLeft: '1rem',
  },
  // '.nav-items > a': {
  //   color: 'red',
  //   background: '#5265c4',
  //   position: 'relative',
  //   // opacity: 0.9,
  // },

  '.nav-items > a:hover': {
    opacity: 1,
  },

  '.nav-items > a::before': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 0,
    height: '2px',
    transition: 'all 0.45s',
  },

  // '.nav-items > a:hover::before': {
  //   width: '100%',
  // },

  '.nav-toggle': {
    display: 'none',
  },

  '@media (max-width: 575px)': {
    '.nav-items': {
      position: 'absolute',
      top: '60px',
      display: 'flex',
      flexDirection: 'column',
      background: '#5265c4',
      alignItems: 'center',
      left: 0,
      width: '100%',
      maxHeight: 'none', //
      // height: '100%',
      transform: 'translateX(100%)',
      transition: 'all .45s',
      clear: 'both',
      // maxHeight: 0,
      // transition: 'max-height .2s ease-out',
    },

    // '.nav-items > a::before': {
    //   background: 'transparent',
    // },

    '.nav-items.open': {
      transform: 'translateX(0)',
    },

    '.nav-toggle': {
      display: 'flex',
      // width: '50px',
      // height: '50px',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },

    '.nav-toggle > .bar': {
      position: 'relative',
      width: '32px',
      height: '2px',
      background: '$greyBlack',
      transition: 'all 0.45s ease-in-out',
    },

    '.nav-toggle > .bar::before, .nav-toggle > .bar::after': {
      content: '',
      position: 'absolute',
      height: '2px',
      background: '$greyBlack',
      borderRadius: '2px',
      transition: 'all 0.45s ease-in-out',
    },

    '.nav-toggle > .bar::before': {
      width: '25px',
      transform: 'translateY(-8px)',
      right: 0,
    },

    '.nav-toggle > .bar::after': {
      width: '32px',
      transform: 'translateY(8px)',
    },

    '.nav-toggle.open > .bar': {
      transform: 'translateX(-40px)',
      background: 'transparent',
    },

    '.nav-toggle.open > .bar::before': {
      width: '32px',
      transform: 'rotate(45deg) translate(26px, -26px)',
    },

    '.nav-toggle.open > .bar::after': {
      transform: 'rotate(-45deg) translate(26px, 26px)',
    },
  },
});

const StyledLink = styled(Link, {
  fontWeight: '$semiBold',
  fontSize: '$h3',
  color: colors.background,
  // marginBottom: '.25rem',
  alignItems: 'center',

  cursor: 'pointer',

  variants: {
    isActive: {
      true: {
        borderBottom: '3px solid $primary',
      },
      false: {
        borderBottom: '3px solid #5265c4',
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
