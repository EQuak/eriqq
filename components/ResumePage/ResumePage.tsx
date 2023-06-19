import { styled } from '../../stitches.config';
import Image from 'next/image';
import resumeImage from '../../public/assets/eq-resume.png';
import Link from 'next/link';
import Button from '../Button';
import Text from '../Text';
import Page from '../Page';
import { Text2 } from '../Text';

export function ResumePage() {
  return (
    <Page title="Resume">
      <Content>
        <Text2 size={'h2'} weight={'bold'}>
          Thank you for taking a look!
        </Text2>
        <Image src={resumeImage} alt={''} placeholder="blur" />
        <Link
          href="https://eriqq.notion.site/Eriq-Quatkemeyer-Resume-d3b4574e0e024c3fb5bd4a94c19f2f5e?pvs=4"
          passHref
          target={'_blank'}
        >
          <Button width={'inline'} theme={'blue'}>
            View a downloadable PDF
          </Button>
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
  alignItems: 'center',
  textAlign: 'center',
  gap: '2rem',

  padding: '0rem 1rem 0rem 1rem',
  img: {
    display: 'flex',
    height: 'fit-content',
    width: '100vw',
    maxWidth: 'fit-content',
    padding: '1rem',
  },
  '@tablet': {
    height: '100%',
    gap: '2rem',
    padding: '0rem 2rem 0rem 2rem',
  },
});
