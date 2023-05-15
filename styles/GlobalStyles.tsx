import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  'html, body, #__next': {
    padding: '0',
    margin: '0',
    fontSize: '16px',
    boxSizing: 'border-box',
    height: '100%',
    fontFamily: "'Inter',sans-serif",
    backgroundColor: '$grey',

    footer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '60px' /* Height of the footer */,
      background: '$greyBlack',
      color: '$grey',
      display: 'flex',
      alignItems: 'center',
    },
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
});
