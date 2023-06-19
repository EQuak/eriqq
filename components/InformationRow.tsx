import { Text2 } from './Text';

import { colors, styled } from '../stitches.config';

interface InformationRowProps {
  title: string;
  date: string;
  company: string;
  children: JSX.Element;
}

export const InformationRow = ({
  title,
  date,
  company,
  children,
}: InformationRowProps) => {
  return (
    <Wrap>
      <TitleWrap>
        <Text2 color={'blue'} weight={'semiBold'} size={'h5'}>
          {title}
        </Text2>
        <Text2 color={'grey'} weight={'normal'}>
          {date}
        </Text2>
      </TitleWrap>
      <ContentWrap>
        <Text2
          style={{ paddingBottom: '.5rem' }}
          weight={'semiBold'}
          size={'h5'}
        >
          {company}
        </Text2>

        {children}
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0rem',
  background: '$background',

  '@tablet': {
    padding: '.5rem',
  },
  '@desktop': {
    flexDirection: 'row',
  },
});

const TitleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '14rem',
  textAlign: 'center',
});

const ContentWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export default InformationRow;
