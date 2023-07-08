import { colors, styled } from '../stitches.config';

interface SectionProps {
  children: React.ReactNode;
  style?: 'header' | 'basic';
  backgroundColor?: string;
  css?: Record<string, unknown>;
}

export const Section = ({
  children,
  style = 'basic',
  css,
  backgroundColor,
}: SectionProps): JSX.Element => {
  return (
    <SectionWrap
      style={style}
      css={{ sectionBackgroundColor: backgroundColor, ...css }}
    >
      {children}
    </SectionWrap>
  );
};

const SectionWrap = styled('section', {
  backgroundColor: '$$backgroundColor',
  border: 'none',
  variants: {
    style: {
      basicSmall: {
        padding: '1rem 0rem',
      },
      basic: {
        padding: '2rem 0rem',
      },
      basicLarge: {
        padding: '3rem 0rem',
      },
      header: {
        padding: '6rem 0rem 1rem',
        '@desktop': {
          padding: '8rem 0rem 2rem',
        },
      },
    },
  },
  defaultVariants: {
    style: 'basic',
  },
});

export default Section;
