import { styled } from '../../stitches.config';
import Image from 'next/image';
import resumeImage from '../../public/assets/eq-resume.png';
import Link from 'next/link';
import {
  Text,
  Page,
  Button,
  Section,
  ContentContainer,
} from '../../components';

export function ResumePage() {
  return (
    <Page title="Resume">
      <Section style={'header'}>
        <ContentContainer>
          <Content>
            <Text decoration={'alignCenter'} size={'h2'} weight={'bold'}>
              Thank you for taking a look!
            </Text>
            <Text decoration={'alignCenter'} size={'h4'} weight={'bold'}>
              Click the button below to view resume
            </Text>
            {/* <Image src={resumeImage} alt={''} placeholder="blur" /> */}
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
        </ContentContainer>
      </Section>
    </Page>
  );
}

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '600px',
  alignItems: 'center',
  textAlign: 'center',
  gap: '2rem',

  padding: '0rem 1rem 0rem 1rem',

  button: {
    marginBottom: '1rem',
  },
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
