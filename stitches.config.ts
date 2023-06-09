import { createStitches } from '@stitches/react';

const baseColors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#61B194',
  grey: '#808080',
  greyBlack: '#333333',
  background: '#F2F5F6',
  red: '#FF0000',
  blue: '#5265c4',
};

export const colors = {
  ...baseColors,
};

export const fontSizes = {
  title: '3rem', // 48px
  subTitle: '2.5rem', // 40px
  h1: '2rem', // 32px
  h2: '1.5rem', // 24px
  h3: '1.125rem', // 18px
  body: '1rem', // 16px
  detail: '1.125rem', // 18px
};

export const { styled, css, globalCss, keyframes, getCssText } = createStitches(
  {
    prefix: 'eriqq',
    theme: {
      colors: {
        black: colors.black,
        white: colors.white,
        primary: colors.primary,
        grey: colors.grey,
        greyBlack: colors.greyBlack,
        background: colors.background,
        red: colors.red,
        blue: colors.blue,
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
