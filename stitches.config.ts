import { createStitches } from '@stitches/react';

const baseColors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#0066ff',
  grey: '#F0F0F0',
  greyBlack: '#333333',
};

export const colors = {
  ...baseColors,
};

export const fontSizes = {
  title: '4.5rem',
  subTitle: '3rem',
  h1: '2rem', // 32px
  h2: '1.5rem', // 24px
  hTest: '22px',
  h3: '1.125rem', // 18px
  body: '1rem', // 16px
  detail: '0.875rem',
  small: '0.75rem',
  link: '0.875rem',
  label: '0.75rem',
  input: '0.875rem',
};

export const { styled, css, globalCss, keyframes, getCssText } = createStitches(
  {
    prefix: 'melmac',
    theme: {
      colors: {
        black: colors.black,
        white: colors.white,
        primary: colors.primary,
        grey: colors.grey,
        greyBlack: colors.greyBlack,
      },
      fontSizes,
      fontWeights: {
        light: '300',
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
      },
      fonts: {
        base: "'Inter',sans-serif",
      },
      shadows: {},
      transitions: {
        LongHover: 'all 250ms ease-in',
        shortHover: 'all 150ms ease-in-out',
        default: 'all 100ms ease-in-out',
      },
    },
    utils: {
      size: (value: string) => ({
        width: value,
        height: value,
      }),
    },
    media: {
      tablet: '(min-width: 575px)',
      desktop: '(min-width: 990px)',
    },
  }
);
