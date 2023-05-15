import Page from '../Page';
import Text from '../Text';
import { styled } from '../../stitches.config';
import Carousel, { CarouselItem } from '../Carousel';
import Link from 'next/link';
import Title from '../Title';
import { EmailIcon, PeopleIcon, TruckIcon } from '../icons';

export default function HomePage() {
  return (
    <Page title="Home">
      <Content>
        <MarginContent>
          <Title title="Welcome to Melmac" />
          <Text weight={'normal'} size="xlarge">
            At Melmac Logistics, we are committed to providing our clients with
            the highest level of service and support, and we are always looking
            for new ways to improve and innovate. Contact us today to learn more
            about our services and how we can help your business grow and
            thrive.
          </Text>
        </MarginContent>
        <Carousel>
          <CarouselItem>
            <img src="pexels-elevate-1267325.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img src="pexels-pixabay-257636.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img src="pexels-samuel-wölfl-1427541.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img src="pexels-tiger-lily-4481326.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img src="pexels-tiger-lily-4481530.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img src="pexels-tiger-lily-4483610.jpg" />
          </CarouselItem>
        </Carousel>
        <MarginContent>
          <CardLinksWrap>
            <CardLink href="/contact">
              <Text weight={'semiBold'}>contact</Text>
              <EmailIcon />
            </CardLink>
            <CardLink href="/services">
              <Text weight={'semiBold'}>services</Text>
              <TruckIcon />
            </CardLink>
            <CardLink href="/about-us">
              <Text weight={'semiBold'}>about</Text>
              <PeopleIcon />
            </CardLink>
          </CardLinksWrap>
        </MarginContent>
      </Content>
    </Page>
  );
}

const Content = styled('div', {
  paddingBottom: '5rem',
  display: 'flex',
  flexDirection: 'column',
});

const MarginContent = styled('div', {
  margin: '0rem 1rem',
});

const CardLinksWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',
  a: {
    width: '100%',
    '&:hover': {
      opacity: 0.5,
    },
  },
  '@tablet': {
    gap: '2rem',
    justifyContent: 'space-evenly',

    flexDirection: 'row',
  },

  '@desktop': {
    gap: '8rem',
  },
});

const CardLink = styled(Link, {
  display: 'flex',
  padding: '1rem',
  border: '2px solid black',
  borderRadius: '15px',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  maxHeight: '5rem',
  width: '100%',

  '@tablet': {
    maxHeight: '6rem',
  },
});
