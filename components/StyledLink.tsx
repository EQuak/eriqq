import Link from 'next/link';
import { styled } from '../stitches.config';

export const StyledLink = styled(Link, {
  display: 'inline-block',
  fontWeight: '$semiBold',
  fontSize: '1.333rem',
  color: '$white',
  alignItems: 'center',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform .2s',

  '@desktop': {
    fontSize: '1rem',

    width: 'auto',
    margin: '0rem',

    alignItems: 'center',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  },
});

export default StyledLink;
