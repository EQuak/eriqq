import { styled } from '../stitches.config';

interface ContentContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  // | 'initialRowFlexResponsiveTabletBreak'
  // | 'initialRowFlexResponsiveDesktopBreak'
  // | 'initialColumnFlexResponsiveTabletBreak'
  // | 'initialColumnFlexResponsiveDesktopBreak';
  gap?: string;
  padding?: 'none' | 'inherit';
  css?: Record<string, unknown>;
}

export const ContentContainer = ({
  children,
  direction = 'column',
  css,
  gap = '0',
  padding,
}: ContentContainerProps): JSX.Element => {
  return (
    <ContainerWrap
      padding={padding}
      direction={direction}
      css={{ gap: gap, ...css }}
    >
      {children}
    </ContainerWrap>
  );
};

const ContainerWrap = styled('div', {
  gap: '$$gap',
  backgroundColor: '$$backgroundColor',
  padding: '0rem 4vw',
  margin: '0 auto',

  '@largeDesktop': {
    padding: '0rem',
    maxWidth: '76.875rem',
  },
  variants: {
    padding: {
      none: {
        padding: 0,
      },
      inherit: {
        margin: '0 auto',
      },
    },
    direction: {
      column: {
        display: 'flex',
        flexDirection: 'column',
      },
      row: {
        display: 'flex',

        flexDirection: 'row',
      },
      'row-reverse': {
        display: 'flex',

        flexDirection: 'row-reverse',
      },
      'column-reverse': {
        display: 'flex',

        flexDirection: 'column-reverse',
      },
      // initialRowFlexResponsiveTabletBreak: {
      //   display: 'flex',

      //   flexDirection: 'row',
      //   '@tablet': {
      //     flexDirection: 'column',
      //   },
      // },
      // initialRowFlexResponsiveDesktopBreak: {
      //   display: 'flex',

      //   flexDirection: 'row',
      //   '@desktop': {
      //     flexDirection: 'column',
      //   },
      // },
      // initialColumnFlexResponsiveTabletBreak: {
      //   display: 'flex',

      //   flexDirection: 'column',
      //   '@tablet': {
      //     flexDirection: 'row',
      //   },
      // },
      // initialColumnFlexResponsiveDesktopBreak: {
      //   display: 'flex',

      //   flexDirection: 'column',
      //   '@desktop': {
      //     flexDirection: 'row',
      //   },
      // },
    },
  },
  defaultVariants: {
    direction: 'row',
    padding: 'inherit',
  },
});

export default ContentContainer;
