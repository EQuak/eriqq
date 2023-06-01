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
    },
  },
});

export default Text;
