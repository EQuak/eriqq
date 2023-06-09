import { styled } from '../../stitches.config';
import Link from 'next/link';
import Button from '../Button';
import Text from '../Text';
import Page from '../Page';

export function ResumePage() {
  return (
    <Page title="Resume" fullPage>
      <Content>
        <Text size={'title'} weight={'bold'}>
          Thank you for taking a look!
        </Text>
        <Text size={'large'} weight={'semiBold'}>
          Click the button below to view a pdf of my resume
        </Text>
        <Link
          href="https://eriqq.notion.site/Eriq-Quatkemeyer-Resume-d3b4574e0e024c3fb5bd4a94c19f2f5e?pvs=4"
          passHref
          target={'_blank'}
        >
          <Button theme={'blue'}>Click here to view a downloadable PDF</Button>
        </Link>
      </Content>
    </Page>
  );
}

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  // justifyContent: 'space-between',

  textAlign: 'center',
  gap: '2rem',

  padding: '0rem 1rem 5rem 1rem',

  '@tablet': {
    height: '100%',
    gap: '4rem',
    padding: '0rem 2rem',
  },
});
