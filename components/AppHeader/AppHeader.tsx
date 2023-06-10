import { Navigation } from './Navigation';
import { styled } from '../../stitches.config';

export const AppHeader = () => {
  return (
    <AppHeaderWrap>
      <Navigation />
    </AppHeaderWrap>
  );
};

export default AppHeader;

const AppHeaderWrap = styled('header', {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  zIndex: 999,
  height: '60px',
  background: '$blue',

  '@tablet': {
    height: '80px',
  },
});
