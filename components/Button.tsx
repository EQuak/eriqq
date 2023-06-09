import { styled } from '../stitches.config';

export const Button = styled('button', {
  borderRadius: '0.5rem',
  width: '100%',
  height: '3rem',
  padding: '0 1.25rem',
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: 'none',
  '-webkit-appearance': 'none',
  border: 'none',
  fontFamily: '$base',
  fontWeight: '$bold',
  fontSize: '$h3',
  transition: '$shortHover',
  whiteSpace: 'nowrap',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  variants: {
    theme: {
      main: {
        color: '$white',
        background: '$greyBlack',

        '&:hover': {
          color: '$primary',
          opacity: '.8',
        },
        '&:active': {
          backgroundColor: '$white',
          borderColor: '$white',
        },
        '&:focus': {
          boxShadow:
            '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px rgba(203, 213, 225, 0.2)',
        },
      },
      blue: {
        color: '$white',
        background: '$blue',

        '&:hover': {
          color: '$primary',
          opacity: '.8',
        },
        '&:active': {
          backgroundColor: '$white',
          borderColor: '$white',
        },
        '&:focus': {
          boxShadow:
            '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px rgba(203, 213, 225, 0.2)',
        },
      },
    },
    width: {
      full: {
        display: 'flex',
      },
      inline: {
        display: 'block',
        width: 'auto',
      },
    },
    size: {
      large: {
        minWidth: '12.5rem',
        height: '3rem',
        maxHeight: '3rem',
        width: '100%',

        '@desktop': {
          width: 'auto',
        },
      },
    },
  },
});

Button.defaultProps = {
  theme: 'main',
};

export default Button;
