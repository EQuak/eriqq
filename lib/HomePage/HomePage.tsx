import Image from 'next/image';

import {
  Page,
  Button,
  ContentContainer,
  Section,
  Text,
  InformationRow,
} from '../../components';
import primaryImage from '../../public/assets/IMG_3055.jpg';

import { colors, styled } from '../../stitches.config';

export function HomePage() {
  return (
    <Page title="Home">
      <Section style={'header'} backgroundColor={colors.lightBlue}>
        <ContentContainer>
          <Content>
            <InfoWrap>
              <Text size={'title'} weight={'bold'}>
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
        <ContentContainer>
          <Text size={'h2'} weight={'bold'}>
            About me
          </Text>
          <Text size={'body'} weight={'light'}>
            <span>
              I am 25 years old and currently live in San Tan Valley, Arizona. I
              have two dogs named Bindi and Dale. In my free time, I enjoy
              fishing, golfing, playing pickleball, and even snowboarding when
              the opportunity arises. On quieter days, I indulge in my inner
              movie enthusiast, bowling and occasionally build Lego's where I
              proudly consider myself a Star Wars nerd. When I am not pursuing
              my hobbies, I value the quality time I spend with my friends and
              family. I have previously worked in both remote and traditional
              office settings. Looking for a role where I can learn from
              mistakes, collaborate with different individuals, provide problem
              solving solutions and grow as a person and employee.
            </span>
          </Text>
        </ContentContainer>
      </Section>
      <Section>
        <ContentContainer>
          <Text size={'h2'} weight={'bold'}>
            Experience
          </Text>
          <InformationRow
            title="Associate Engineer"
            date="Jan 2018 - April 2023"
            company="Sibi, llc"
          >
            <Text size={'body'} weight={'light'}>
              <span>
                Working at Sibi, I learned many new things around coding and
                collaborating with others. I started as Sibi cleaning up and
                consolidating data on spreadsheets. This was a manual process
                until I was given the opportunity to try and make this an
                automated process with code. I collaborated with some of the
                existing engineers and was able to create a script that scrapes
                the data we wanted to capture. Shortly after, I started working
                with multiple engineering teams, where I contributed to work in
                technologies such as React, Node.js, JavaScript, and TypeScript
                for both the frontend and backend of the software. Much of my
                knowledge around coding was done through recommended online
                courses & books and experience working with many different
                senior developers from all different backgrounds. I quickly
                picked up new processes to create clean, efficient and readable
                code while collaborating with other team engineers to work on
                existing features or develop new features from scratch where I
                would take part in providing ideas and solutions. Working at
                Sibi, I developed many skills around troubleshooting, problem
                solving and brainstorming for these features.
              </span>
            </Text>
          </InformationRow>
        </ContentContainer>
        <ContentContainer>
          <InformationRow
            title="Floor Employee"
            date="Oct 2015 - Nov 2017"
            company="Fidelitone, llc"
          >
            <Text size={'body'} weight={'light'}>
              <span>
                As a Floor employee at Fidelitone, I was rotated around several
                different warehouse operations. Utilizing heavy machinery, such
                as electric pallet jacks, I loaded and unloaded pallets in semi
                trucks and put them in the correct spot throughout the
                warehouse. I also typically ran the box folding machines and was
                one of the go to employees to help troubleshoot issues that came
                about on those machines. In our order fulfillment department, I
                was rotated around in many different roles. I was one of the
                trusted employees that would sometimes come in early to help
                sort our daily orders to optimize the picking picking process.
                When I was working on picking those orders, I was trusted with
                working at the back of the assembly line to not only pick the
                remaining contents of the order, but to also review all contents
                that should be in that order before packaging for the shipping
                department. Within the employees that would review the contents,
                I had some of the lowest returns due to incorrect items in the
                order. Additionally, in the shipping department, I scanned the
                orders to generate shipping labels and placed them on pallets
                based on shipping methods. I believe I made significant
                contributions to the overall success in the fast-paced
                warehousing and logistics functions of Fidelitone.
              </span>
            </Text>
          </InformationRow>
        </ContentContainer>
        <ContentContainer>
          <InformationRow
            title="Team Member"
            date="Nov 2014 - Oct 2015"
            company="Pizza Hut"
          >
            <Text size={'body'} weight={'light'}>
              <span>
                Pizza Hut was my first job as soon as I got my drivers license.
                As a team member, my role encompassed various responsibilities
                within the restaurant's operations. My primary duty was to take
                customer orders, either over the phone or in person, with a
                welcoming attitude. I was responsible for inputting orders into
                the system and making those orders along with contributing to
                the overall efficiency of the restaurant by assisting with food
                preparation, collaborating with teammates to maintain
                cleanliness and organization in the kitchen. Working at Pizza
                Hut helped build communication skills and the ability to work in
                a fast-paced environment.
              </span>
            </Text>
          </InformationRow>
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
