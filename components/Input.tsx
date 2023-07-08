import { styled } from '../stitches.config';

export const Input = styled('input', {
  display: 'block',
  width: '100%',
  minHeight: '27px',
  height: '35px',
  fontFamily: '$base',
  border: '1px solid #cbd6e2',
  outline: 'none',
  fontSize: '1rem',
  fontWeight: '$normal',
  color: '$black',
  backgroundColor: '#f5f8fa',
  boxSizing: 'border-box',
  backgroundClip: 'padding-box',
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
  appearance: 'none',
  transition: 'all 200ms ease',
  '&::placeholder': {
    fontWeight: '$normal',
    fontStyle: 'italic',
  },
  '&:-ms-input-placeholder': {
    fontWeight: '$normal',
    fontStyle: 'italic',
  },
  '&:active': {
    outline: 'none',
    border: '1px solid $primary',
  },
  '&:focus': {
    outline: 'none',
    border: '1px solid $primary',
  },
  '&:disabled': {
    opacity: 0.5,
  },
  variants: {
    error: {
      true: {
        border: '1px solid red',
        color: '$greyBase',
        fontWeight: '$normal',
        fontStyle: 'italic',
      },
    },
  },
});
