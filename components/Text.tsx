import { styled } from '../stitches.config';

export const Text = styled('div', {
  margin: 0,
  fontSize: '$body',
  color: '$black',
  variants: {
    decoration: {
      uppercase: {
        textTransform: 'uppercase',
      },
      underline: {
        textDecoration: 'underline',
      },
      alignCenter: {
        textAlign: 'center',
      },
      alignRight: {
        textAlign: 'right',
      },
    },
    size: {
      title: {
        fontSize: '3.157rem',
        fontWeight: 600,
        lineHeight: 1.2,
        '@desktop': {
          fontSize: '4.209rem',
        },
      },
      h1: {
        fontSize: '3.157rem',
        fontWeight: 600,
        lineHeight: 1.2,
        '@desktop': {
          fontSize: '4.209rem',
        },
      },
      h2: {
        fontSize: '2.369rem',
        fontWeight: 600,
        lineHeight: 1.3,
        '@desktop': {
          fontSize: '3.157rem',
        },
      },
      h3: {
        fontSize: '1.777rem',
        lineHeight: 1.3,
        '@desktop': {
          fontSize: '2.369rem',
        },
      },
      h4: {
        fontSize: '1.777rem',
      },
      h5: {
        fontSize: '1.333rem',
      },
      body: {
        color: 'rgb(44, 61, 82);',
        fontSize: '1rem',
        lineHeight: 1.6,
        '@desktop': {
          fontSize: '1.14rem',
        },
      },
      label: {
        fontSize: '14px',
        '@desktop': {
          fontSize: '14px',
        },
      },
    },
    weight: {
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      semiBold: {
        fontWeight: '$semiBold',
      },
      bold: {
        fontWeight: '$bold',
      },
      extraBold: {
        fontWeight: '$extraBold',
      },
    },
    color: {
      inherit: {
        color: 'inherit',
      },
      background: {
        color: '$background',
      },
      white: {
        color: '$white',
      },
      black: {
        color: '$black',
      },
      blue: {
        color: '$blue',
      },
      grey: {
        color: '$grey',
      },
    },
  },
});

export default Text;
