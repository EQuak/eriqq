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
        '@tablet': {
          fontSize: '$body',
        },
        lineHeight: '1.5rem',
      },

      detail: {
        fontSize: '$label',
        '@tablet': {
          fontSize: '$detail',
          lineHeight: '1.25rem',
        },
      },
      small: {
        fontSize: '$small',
        lineHeight: '1rem',
      },
      large: {
        fontSize: '$h3',
        lineHeight: '1.5rem',
      },
      xlarge: {
        fontSize: '$hTest',
        lineHeight: '2rem',
      },
      xxlarge: {
        lineHeight: '2rem',
        fontSize: '$h1',
        '@desktop': {
          lineHeight: '2.5rem',
        },
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
      grey: {
        color: '$grey',
      },
      primary: {
        color: '$primary',
      },
      white: {
        color: '$white',
      },
      background: {
        color: '$background',
      },
      disabled: {
        color: '$tertiary700',
      },
      red: {
        color: '$red',
      },
    },
  },
});

export default Text;
