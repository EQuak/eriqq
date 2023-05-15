import { colors, styled } from '../stitches.config';
import React from 'react';

const CarouselItemWrap = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary',
  width: '100%',

  '& img': {
    position: 'relative',
    height: '320px',
    width: '100%',

    overflow: 'hidden',
    '@tablet': {
      height: '520px',
    },
  },
});

const CarouselWrap = styled('div', {
  overflow: 'hidden',
  position: 'relative',
  marginTop: '1rem',
  display: 'block',
});

const CarouselInner = styled('div', {
  transform: 'translateX(-0%)',
  whiteSpace: 'nowrap',
  transition: 'transform 0.9s',
});

const Indicators = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  position: 'absolute',
  alignContent: 'center',
  top: '0',
  height: '100%',
});

const Indicator = styled('div', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '.4rem',
  height: '100%',
  '&:hover': {
    opacity: 0.5,
    backgroundColor: '$white',
  },
});

interface CarouselProps {
  children: any;
  width?: number;
}

export const CarouselItem = ({ children, width }: CarouselProps) => {
  return <CarouselItemWrap style={{ width }}>{children}</CarouselItemWrap>;
};

export const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <CarouselWrap>
      <CarouselInner
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </CarouselInner>
      <Indicators>
        <Indicator
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM4 10.5H2V13.5H4V10.5Z"
              fill={colors.black}
            />
          </svg>
        </Indicator>
        <Indicator
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"
              fill={colors.black}
            />
          </svg>
        </Indicator>
      </Indicators>
    </CarouselWrap>
  );
};

export default Carousel;
