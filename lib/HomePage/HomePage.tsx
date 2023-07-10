import Image from 'next/image';

import {
  Page,
  Button,
  ContentContainer,
  Section,
  Text,
  ExperienceCard,
  Pill,
} from '../../components';
import primaryImage from '../../public/assets/IMG_3055.jpg';

import { colors, styled } from '../../stitches.config';
import { skills } from '../../data';

export function HomePage() {
  return (
    <Page title="Home">
      <Section style={'header'} backgroundColor={colors.lightBlue}>
        <ContentContainer>
          <Content>
            <InfoWrap>
              <Text color={'white'} size={'title'} weight={'bold'}>
                <span>Hello, I am Eriq</span>
              </Text>
              <a
                style={{ width: 'fit-content' }}
                href="mailto: eriq.quatkemeyer@hotmail.com"
              >
                <Button width={'inline'} theme={'blue'}>
                  Send me an email
                </Button>
              </a>
            </InfoWrap>
            <ImageWrap>
              <Image
                src={primaryImage}
                alt={'Eriq Quatkemeyer'}
                placeholder="blur"
              />
            </ImageWrap>
          </Content>
        </ContentContainer>
      </Section>
      <Section>
        <ContentContainer gap={'.5rem'}>
          <Text color={'white'} size={'h2'} weight={'bold'}>
            About me
          </Text>
          <div
            style={{
              backgroundColor: colors.white,
              padding: '1rem',
              borderRadius: '15px',
              opacity: 0.8,
            }}
          >
            <Text size={'body'} weight={'light'}>
              <span>
                I am 25 years old and currently live in San Tan Valley, Arizona.
                I have two dogs named Bindi and Dale. In my free time, I enjoy
                fishing, golfing, playing pickleball, and even snowboarding when
                the opportunity arises. On quieter days, I indulge in my inner
                movie enthusiast, bowling and occasionally build Lego's where I
                proudly consider myself a Star Wars nerd. When I am not pursuing
                my hobbies, I value the quality time I spend with my friends and
                family. I have previously worked in both remote and traditional
                office settings. Looking for a role where I can learn from
                mistakes, collaborate with different individuals, provide
                problem solving solutions and grow as a person and employee.
              </span>
            </Text>
          </div>
        </ContentContainer>
      </Section>
      <Section>
        <ContentContainer gap={'.5rem'}>
          <Text color={'white'} size={'h2'} weight={'bold'}>
            Skills
          </Text>
          <div style={{ margin: '0 auto' }}>
            {skills.map((skill) => {
              return <Pill key={skill.id} title={skill.skill} />;
            })}
          </div>
        </ContentContainer>
      </Section>
      <Section>
        <ContentContainer gap={'.5rem'}>
          <Text color={'white'} size={'h2'} weight={'bold'}>
            Experience
          </Text>
          <ContentContainer gap={'1rem'} css={{ padding: 0, margin: 0 }}>
            <ExperienceCard
              title={'Associate Engineer'}
              date={'Jan 2018 - April 2023'}
              employer={'Sibi, llc'}
              description={
                'Worked on front-end and back-end features of the software collaborating with other engineers, designers and product managers.'
              }
              skills={skills.filter((skill) => {
                return skill.companies.includes('Sibi');
              })}
              logo={'/assets/Sibi-logo.png'}
              duties={
                'Developed responsive interfaces using CSS, HTML, Javascript & Typescript from Figma designs\n Utilized Cypress to build end-to-end tests\n Implemented unit tests with Jest framework for components and Node APIs\n Used Git to manage code repositories for collaboration, version tracking, and code review processes\n Worked with AWS services like EventBridge, CloudWatch, S3, SNS, SQS and CloudFront\n Implemented data modeling and schema design for DynamoDB, MongoDB, and PostgreSQL for data organization and query efficiency\n Integrated Datadog monitoring to provide real-time insights on E2E tests and performance monitoring for health and stability\n Used Apollo GraphQL to fetch and manage data from server to client\n Utilized the Stripe payment gateway to process online payments & transactions, handle payment forms and displaying relevant payment information\n Worked in an agile Scrum environment with a daily standup and weekly retros to reflect on sprints\n Worked on migrating from a legacy web application to a serverless Next.js web application'
              }
            />
            <ExperienceCard
              title={'Floor Employee'}
              date={'Oct 2015 - Nov 2017'}
              employer={'Fidelitone'}
              description={
                'Rotated through many different departments which included: Order fulfillment, Line picking, Loading & unloading semi-trucks.'
              }
              skills={skills.filter((skill) => {
                return skill.companies.includes('Fidelitone');
              })}
              logo={'/assets/Fidelitone-logo.jpeg'}
              duties={
                'Was a trusted employee to take on multiple responsibilities throughout the company\n Had some of the lowest returns due to incorrect items after personally reviewing\n Worked with and around heavy equipment'
              }
            />
            <ExperienceCard
              title={'Team Member'}
              date={'Nov 2014 - Oct 2015'}
              employer={'Pizza Hut'}
              description={
                'My primary duties was to take customer orders, input them into the system and complete those orders.'
              }
              skills={skills.filter((skill) => {
                return skill.companies.includes('Pizza-Hut');
              })}
              logo={'/assets/Pizza-Hut-logo.jpeg'}
              duties={
                'Was my first job at 16\n Worked in a high pace environnement\n Maintained cleanliness and organization in the kitchen'
              }
            />
          </ContentContainer>
        </ContentContainer>
      </Section>
    </Page>
  );
}

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100% - 80px)',

  gap: '2rem',
  alignItems: 'center',

  '@tablet': {
    height: 'fit-content',
    flexDirection: 'row',
  },
});

const InfoWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  gap: '2rem',
  justifyContent: 'center',
  width: '100%',
});

const ImageWrap = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  flex: '1',
  borderRadius: '15px',
  position: 'relative',
  overflow: 'hidden',
  img: {
    display: 'block',

    opacity: 0.9,
    margin: 0,
    width: '100%',
    height: 'auto',
    '@tablet': {
      height: '100%',
    },
  },
});
