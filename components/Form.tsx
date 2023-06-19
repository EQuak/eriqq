import { styled } from '../stitches.config';

export const Row = styled('div', {
  borderBottom: '1px solid grey',
  alignContent: 'center',
  paddingTop: '1rem',
  paddingBottom: '1.5rem',
  wordWrap: 'break-word',

  '@tablet': {
    // paddingTop: '1.875rem',
    // paddingBottom: '1rem',
  },
});

export const Label = styled('div', {
  paddingBottom: '1rem',

  '@tablet': {
    paddingBottom: '1.875rem',
  },
});

export const Error = styled('div', {
  fontWeight: '$normal',
  fontSize: '14px',
  color: 'red',
  height: '1rem',
  alignItems: 'center',
  marginBottom: '.5rem',
});

export const InputWithLabelWrap = styled('div', {
  display: 'grid',
  alignItems: 'center',
  '.label': {
    marginBottom: '.5rem',
  },
  '.required': {
    color: 'red',
  },
});

export const InputV2 = styled('input', {
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
    invalid: {
      true: {
        border: '1px solid red',
        color: '$greyBase',
        fontWeight: '$normal',
        fontStyle: 'italic',
      },
    },
  },
});

export interface FieldErrorProps {
  field?: { message?: string };
}

export function FieldError({ field }: FieldErrorProps): JSX.Element {
  return field ? <Error>{field?.message}</Error> : <></>;
}
