import Text from './Text';

import { colors, styled } from '../stitches.config';

interface InformationRowProps {
  title: string;
  date: string;
  company: string;
  companyInherited?: string;
  children: JSX.Element;
}

export const InformationRow = ({
  title,
  date,
  company,
  companyInherited,
  children,
}: InformationRowProps) => {
  return (
    <Wrap>
      <TitleWrap>
        <Text
          decoration={'uppercase'}
          color={'blue'}
          weight={'semiBold'}
          size={'small'}
        >
          {title}
        </Text>
        <Text decoration={'uppercase'} color={'grey'} weight={'normal'}>
          {date}
        </Text>
      </TitleWrap>
      <ContentWrap>
        {companyInherited ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            <Text
              decoration={'uppercase'}
              style={{ paddingBottom: '.5rem' }}
              weight={'semiBold'}
              size={'small'}
            >
              {companyInherited}
            </Text>
            <div>
              <svg
                width={'7px'}
                height={'10px'}
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.175L1.33198 0L7 5L1.33198 10L0 8.825L4.32659 5L0 1.175Z"
                  fill={colors.primary}
                />
              </svg>
            </div>
            <Text
              decoration={'uppercase'}
              style={{ paddingBottom: '.5rem' }}
              weight={'semiBold'}
              size={'small'}
            >
              {company}
            </Text>
          </div>
        ) : (
          <Text
            decoration={'uppercase'}
            style={{ paddingBottom: '.5rem' }}
            weight={'semiBold'}
            size={'small'}
          >
            {company}
          </Text>
        )}

        <Text size={'body'}>{children}</Text>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0rem',

  // padding: '1rem',
  // border: '1px solid $primary',
  // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)',
  background: '$background',
  //   borderRadius: '30px',
  //   borderBottom: '2px solid $primary',

  borderRadius: '15px',
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
