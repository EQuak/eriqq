import { Text } from './Text';

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
        <Text color={'blue'} weight={'semiBold'} size={'h5'}>
          {title}
        </Text>
        <Text color={'grey'} weight={'normal'}>
          {date}
        </Text>
      </TitleWrap>
      <ContentWrap>
        <Text
          style={{ paddingBottom: '.5rem' }}
          weight={'semiBold'}
          size={'h5'}
        >
          {company}
        </Text>

        {children}
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem 0rem 0rem',
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
