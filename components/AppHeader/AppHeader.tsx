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
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  background: '$background',
  zIndex: 99999,
});
