import { keyframes } from '../stitches.config';

export const fadeInDown = keyframes({
  '0%': { opacity: 0, transform: 'translate3d(0, -100%, 0);' },
  '100%': { opacity: 1, transform: 'none' },
});

export const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
  '100%': { opacity: 1, transform: 'none' },
});

export const fadeInLeft = keyframes({
  '0%': { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
  '100%': { opacity: 1, transform: 'none' },
});

export const fadeInRight = keyframes({
  '0%': { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
  '100%': { opacity: 1, transform: 'none' },
});

export const slideUp = keyframes({
  '0%': { transform: 'translateY(25px)' },
  '100%': { transform: 'translateY(0)' },
});

export const slideDown = keyframes({
  '0%': { transform: 'translateY(-50px)' },
  '100%': { transform: 'translateY(0)' },
});

export const smallFadeInDown = keyframes({
  '0%': { opacity: 0, transform: 'translate3d(0, -30%, 0)' },
  '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
});

//////// Tests

export const textClip = keyframes({
  '0%': { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
  '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
});

export const outerLeft = keyframes({
  '0%': { transform: 'translateX(50%)' },
  '100%': { transform: 'none' },
});

export const innerLeft = keyframes({
  '0%': { transform: 'translateX(-50%)' },
  '100%': { transform: 'none' },
});

export const imageIn = keyframes({
  '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
  '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
});

export const testSlideDown = keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(0)' },
});

export const testSlideUp = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(-100%)' },
});
