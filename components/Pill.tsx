import { styled } from '../stitches.config';

interface PillProps {
  title: string;
  color?: string;
}

export const Pill = ({ title, color }: PillProps): JSX.Element => {
  return <PillWrap>{title}</PillWrap>;
};

const PillWrap = styled('div', {
  // border: '2px solid #EDEEF0',
  padding: '8px 18px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  borderRadius: '100px',
  width: 'fit-content',
  marginRight: '.5rem',
  marginBottom: '.5rem',
  fontSize: '14px',
  backgroundColor: '#EFF4FF',
});

export default Pill;
