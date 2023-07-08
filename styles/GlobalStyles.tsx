import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  'html, body, #__next': {
    padding: '0',
    margin: '0',
    fontSize: '16px',
    boxSizing: 'border-box',
    height: '100%',
    fontFamily: "'CerebriSans',sans-serif",
    position: 'relative',
    backgroundColor: '$white',
  },

  body: {
    overflowX: 'hidden',
  },

  'body.is-open': {
    overflow: 'hidden',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
});
