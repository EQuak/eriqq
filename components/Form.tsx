import { styled } from '../stitches.config';

export const Row = styled('div', {
  borderBottom: '1px solid grey',
  alignContent: 'center',
  paddingTop: '1rem',
  paddingBottom: '.5rem',
  wordWrap: 'break-word',

  '@tablet': {
    paddingTop: '1.875rem',
    paddingBottom: '1rem',
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
  fontSize: '$small',
  color: 'red',
});

export const InputWithLabelWrap = styled('div', {
  display: 'grid',
  gridAutoRows: '1.5rem',
  alignItems: 'center',
  borderRadius: '.75rem',
  border: '1px solid grey',
  padding: '.5rem',
  marginBottom: '.5rem',

  variants: {
    error: {
      true: {
        border: '1px solid red',
      },
    },
  },
});

export const InputV2 = styled('input', {
  display: 'block',
  width: '100%',
  // height: '3.5rem',
  fontFamily: '$base',
  border: 'none',
  outline: 'none',
  fontSize: '$large',
  fontWeight: '$normal',
  color: '$black',
  backgroundColor: '#E8E8E8',
  boxSizing: 'border-box',
  backgroundClip: 'padding-box',
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
  appearance: 'none',
  transition: 'all 200ms ease',
  '&::placeholder': {
    color: '$placeholderText',
    fontWeight: '$normal',
    fontStyle: 'italic',
  },
  '&:-ms-input-placeholder': {
    color: '$placeholderText',
    fontWeight: '$normal',
    fontStyle: 'italic',
  },
  // '&:hover': {},
  '&:active': {
    outline: 'none',
    border: 'none',
  },
  '&:focus': {
    outline: 'none',
    border: 'none',
  },
  '&:disabled': {
    opacity: 0.5,
  },
  variants: {
    invalid: {
      true: {
        borderBottom: '1px solid red',
        color: '$greyBase',
        fontWeight: '$normal',
        fontStyle: 'italic',
        outline: 0,
        '&:focus': {
          borderColor: 'red',
        },
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
