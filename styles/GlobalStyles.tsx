import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  'html, body, #__next': {
    padding: '0',
    margin: '0',
    fontSize: '16px',
    boxSizing: 'border-box',
    height: '100%',
    fontFamily: "'CerebriSans',sans-serif",
    backgroundColor: '$background',

    footer: {
      backgroundColor: '$background',
      width: '100%',
      height: '60px' /* Height of the footer */,
      borderTop: '1px solid $primary',
      color: '$primary',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      marginTop: '4rem',
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
