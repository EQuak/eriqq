import { styled } from '../../stitches.config';
import { Navigation } from './Navigation';

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
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  background: '$grey',
  zIndex: 99999,
});
