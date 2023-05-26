import { createStitches } from '@stitches/react';

const baseColors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#61B194',
  background: '#F2F5F6',
  greyBlack: '#333333',
  grey: '#808080',
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
};

export const { styled, css, globalCss, keyframes, getCssText } = createStitches(
  {
    prefix: 'eriqq',
    theme: {
      colors: {
        black: colors.black,
        white: colors.white,
        primary: colors.primary,
        background: colors.background,
        greyBlack: colors.greyBlack,
        grey: colors.grey,
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
