import { styled } from '../stitches.config';

export const Text = styled('div', {
  margin: 0,
  fontSize: '$body',
  color: '$greyBlack',
  variants: {
    decoration: {
      underline: {
        textDecoration: 'underline',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
    },
    size: {
      title: {
        fontSize: '$subTitle',
        fontWeight: '$bold',
        '@tablet': {
          fontSize: '$title',
        },
      },
      subTitle: {
        fontSize: '$subTitle',
        fontWeight: '$bold',
      },
      body: {
        fontSize: '$detail',
        lineHeight: '24px',

        '@tablet': {
          fontSize: '$body',
          lineHeight: '28px',
        },
      },
      small: {
        fontSize: '$h3',
        lineHeight: '1rem',
      },
      medium: {
        fontSize: '$h2',
        lineHeight: '1.5rem',
      },
      large: {
        fontSize: '$h1',
        lineHeight: '2rem',
        '@desktop': {
          lineHeight: '2.5rem',
        },
      },
      xlarge: {
        fontSize: '$hTest',
        lineHeight: '2rem',
      },
    },
    type: {
      label: {
        marginBottom: '1rem',
      },
    },
    weight: {
      bold: {
        fontWeight: '$bold',
      },
      semiBold: {
        fontWeight: '$semiBold',
      },
      normal: {
        fontWeight: '$normal',
      },
      extraBold: {
        fontWeight: '$extraBold',
      },
    },
    color: {
      inherit: {
        color: 'inherit',
      },
      black: {
        color: '$black',
      },
      white: {
        color: '$white',
      },
      primary: {
        color: '$primary',
      },
      grey: {
        color: '$grey',
      },
      greyBlack: {
        color: '$greyBlack',
      },
      background: {
        color: '$background',
      },
      red: {
        color: '$red',
      },
      blue: {
        color: '$blue',
      },
    },
  },
});

export const Text2 = styled('div', {
  margin: 0,
  fontSize: '$body',
  color: '$black',
  variants: {
    padding: {
      true: {
        padding: '0px',

        '@desktop': {
          padding: '0px 60px',
        },
      },
    },
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
    type: {
      label: {
        marginBottom: '1rem',
      },
      subLabel: {
        textTransform: 'uppercase',
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
      primary: {
        color: '$primary',
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
      greyBlack: {
        color: '$greyBlack',
      },
    },
  },
});

export default Text;
