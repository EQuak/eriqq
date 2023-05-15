import Link from 'next/link';
import { styled } from '../../stitches.config';
import { Text } from '../Text';

export const AppFooter = () => {
  return (
    <Content>
      <Link href="/privacy-policy">
        <Text color="grey">Privacy Policy</Text>
      </Link>
    </Content>
  );
};

export default AppFooter;

const Content = styled('div', {
  margin: '0rem 1.875rem',
});
