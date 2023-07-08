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
  lightBlue: '#CCE4FE',
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
        lightBlue: colors.lightBlue,
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
      transitions: {},
    },
    utils: {},
    media: {
      tablet: '(min-width: 35.938rem)',
      desktop: '(min-width: 61.875rem)',
      midDesktop: '(min-width: 67.8125rem)',
      largeDesktop: '(min-width: 84.875rem)',
    },
  }
);
