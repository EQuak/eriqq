import Page from '../Page';
import Text from '../Text';
import { styled } from '../../stitches.config';
import { ImageTitle } from '../Title';
import backgroundImage from '../../public/pexels-tiger-lily-4481530.jpg';

export function AboutPage() {
  return (
    <Page title="About us">
      <Content>
        <ImageTitle
          title="About us"
          backgroundSource={backgroundImage}
          alt="pexels-tiger-lily-4481530"
        />
        <Layout>
          <Text weight={'normal'} size="xlarge">
            Melmac Logistics is a brokerage company founded in 2021, dedicated
            to providing top-notch logistics services to clients across various
            industries. We pride ourselves on our commitment to excellence,
            reliability, and innovation, ensuring that our clients receive the
            best possible logistics solutions for their businesses. Our team of
            professionals brings a wealth of knowledge and expertise to the
            table, and we are always looking for new and innovative ways to
            improve our services and stay ahead of the curve.
          </Text>
        </Layout>
      </Content>
    </Page>
  );
}

const Content = styled('div', {
  paddingBottom: '5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const Layout = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '2rem',
  margin: '0rem 1rem',

  '@tablet': {
    gap: '1.875rem',
    margin: '0rem 1.875rem',
  },

  '@desktop': {
    gap: '6rem',
    margin: '0rem 3.875rem',
  },
});
