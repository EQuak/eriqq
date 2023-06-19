import { createStitches } from '@stitches/react';

const baseColors = {
  background: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  primary: '#61B194',
  grey: '#808080',
  greyBlack: '#333333',
  red: '#FF0000',
  blue: '#5265c4',
};

export const colors = {
  ...baseColors,
};

export const fontSizes = {};

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
        base: "'CerebriSans',sans-serif",
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
