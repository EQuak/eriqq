import Page from '../Page';
import { colors, styled } from '../../stitches.config';
import { ImageTitle } from '../Title';
import Text from '../Text';
import backgroundImage from '../../public/pexels-pixabay-257636.jpg';

export function ServicesPage() {
  return (
    <Page title="Services">
      <Content>
        <ImageTitle
          title="Services"
          backgroundSource={backgroundImage}
          alt="pexels-pixabay-257636"
        />
        <Layout>
          <Text weight={'normal'} size="xlarge">
            At Melmac Logistics, we offer a comprehensive range of logistics
            services that are designed to meet the unique needs and requirements
            of our clients.
          </Text>
          <div>
            <Header>
              <Text weight={'semiBold'} size="xlarge">
                Our services include:
              </Text>
            </Header>
            <ServicesLayout>
              <Section>
                <div className="section-svg">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 97 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M65 50V13.5C65 11.8431 66.3431 10.5 68 10.5H87.9294C89.1758 10.5 90.2923 11.2707 90.7344 12.436L95.305 24.4859C95.4339 24.8258 95.5 25.1863 95.5 25.5499V46.9957C95.5 48.6543 94.1543 49.9981 92.4957 49.9957L78 49.9752M65 50L67 49.9752M65 50L61.0284 49.9753M6.5 49.9752L4.01354 49.9864C2.35141 49.9939 1 48.6486 1 46.9864V4C1 2.34315 2.34315 1 4 1H59C60.6569 1 62 2.34314 62 4V48.9997C62 49.537 61.5623 49.971 61.0284 49.9753M18 49.9752L37 50C51.6353 49.8355 58.6083 49.9262 61 49.9752L61.0284 49.9753M69 17.5V23.5C69 25.1569 70.3431 26.5 72 26.5H86C87.6569 26.5 89 25.1569 89 23.5V17.5C89 15.8431 87.6569 14.5 86 14.5H72C70.3431 14.5 69 15.8431 69 17.5ZM72.5 59.5C76.0899 59.5 79 56.5899 79 53C79 49.4101 76.0899 46.5 72.5 46.5C68.9101 46.5 66 49.4101 66 53C66 56.5899 68.9101 59.5 72.5 59.5ZM12.5 59.5C16.0899 59.5 19 56.5899 19 53C19 49.4101 16.0899 46.5 12.5 46.5C8.91015 46.5 6 49.4101 6 53C6 56.5899 8.91015 59.5 12.5 59.5Z"
                      stroke={colors.greyBlack}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <List>
                  <li>{'Van'}</li>
                  <li>{'Flatbed'}</li>
                  <li>{'Refrigerated'}</li>
                </List>
              </Section>
              <Section variant={'reverse'}>
                <List>
                  <li>{'LTL/Partial'}</li>
                  <li>{'Expedite'}</li>
                  <li>{'Team Service'}</li>
                </List>
                <div className="section-svg">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 101 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63.8272 72.7917L92.1302 60.1903C92.6348 59.9657 92.8617 59.3746 92.6371 58.8701L77.2438 24.2962C77.0192 23.7917 76.4281 23.5648 75.9235 23.7894L40.0668 39.7538C39.5623 39.9785 39.3354 40.5696 39.56 41.0741L51.6123 68.1439M48.9937 69.8687L25.3216 16.7003M25.3541 16.8293C19.0233 1.77431 13.92 -1.41161 1.88515 4.88157C1.42295 5.12325 1.22779 5.68697 1.43993 6.16345L1.83427 7.04915C2.07289 7.58509 2.71952 7.79954 3.24059 7.52998C13.3341 2.30836 18.0579 6.14603 24.5546 22.6302M46.998 72.9925L24.5718 22.6225M61.5559 29.6275L65.3022 38.0417C65.5268 38.5462 65.2999 39.1373 64.7954 39.362L59.0857 41.9041C58.5812 42.1287 57.99 41.9018 57.7654 41.3973L54.0192 32.983M64.3403 76.4481L98.0323 61.3139C98.5372 61.0871 99.1304 61.3136 99.3556 61.8193L99.8376 62.902C100.062 63.4066 99.8353 63.9977 99.3308 64.2223L64.6441 79.6658M59.2953 85.4003C54.6126 87.4852 49.1431 85.4168 47.0788 80.7803C45.0145 76.1439 47.1372 70.6952 51.8199 68.6103C56.5027 66.5254 61.9722 68.5939 64.0365 73.2303C66.1007 77.8667 63.9781 83.3154 59.2953 85.4003ZM57.2188 80.7364C55.1376 81.663 52.7067 80.7437 51.7893 78.6831C50.8718 76.6225 51.8152 74.2008 53.8964 73.2742C55.9776 72.3476 58.4086 73.2669 59.326 75.3275C60.2435 77.3882 59.3 79.8098 57.2188 80.7364Z"
                      stroke={colors.greyBlack}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </Section>
              <Section>
                <div className="section-svg">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 69 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.5019 16.0005V21C49.5019 22.0091 48.7724 22.132 47.8724 22.132L20.2754 22.132C19.3755 22.132 18.6459 22.0091 18.6459 21V16.0005M49.5019 16.0005H61.292C62.1919 16.0005 62.9215 16.8186 62.9215 17.8277V87.7913C62.9215 88.8004 62.1919 89.6185 61.292 89.6185H7.51805C6.61809 89.6185 5.88854 88.8004 5.88854 87.7913V17.8277C5.88854 16.8186 6.61809 16.0005 7.51805 16.0005H18.6459M49.5019 16.0005V6.30291C49.5019 5.55149 49.0907 4.87451 48.4642 4.60784C37.1303 -0.216335 30.4759 -0.186024 19.6622 4.59927C19.0466 4.87168 18.6459 5.54215 18.6459 6.28422V16.0005M50.4157 9.38153H62.1067C65.2565 9.38153 67.81 12.2447 67.81 15.7767V91.6049C67.81 95.1368 65.2566 98 62.1067 98H6.70329C3.55345 98 1 95.1368 1 91.6049V15.7767C1 12.2447 3.55345 9.38153 6.70329 9.38153H17.999M13.2213 30.3942H18.1099M23.8132 30.3942H55.5887M23.8132 43.1845H55.5887M23.8132 55.9747H55.5887M23.8132 69.6786H55.5887M13.2213 55.9747H18.1099M13.2213 69.6786H18.1099M13.2213 43.1845H18.1099"
                      stroke={colors.greyBlack}
                      strokeWidth="2"
                    />
                  </svg>

                  {/* <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 58 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 16.5L0.518404 15.6236L0 15.9085V16.5H1ZM56.5 16.5H57.5V15.9179L56.9938 15.6304L56.5 16.5ZM29 63.2837L28.5209 64.1615L29.0043 64.4254L29.4858 64.1578L29 63.2837ZM46.0248 11.8512L46.876 11.3264L45.8264 9.62396L44.9752 10.1488L46.0248 11.8512ZM12.9887 22.6202L12.4773 21.7608L12.9887 22.6202ZM1.52088 48.2843L2 47.4066L1.52088 48.2843ZM55.9858 48.2858L55.5 47.4117L55.9858 48.2858ZM19.9752 26.738L20.5 27.5892L19.9752 26.738ZM18.0782 35.3387L17.6565 36.2454L18.0782 35.3387ZM28.7168 1.26905L28.2352 0.392662L28.7168 1.26905ZM28.2352 0.392662L0.518404 15.6236L1.4816 17.3764L29.1984 2.14545L28.2352 0.392662ZM0.515684 17.3749L28.5157 32.8749L29.4843 31.1251L1.48432 15.6251L0.515684 17.3749ZM29.491 32.8712L56.991 17.3712L56.009 15.6288L28.509 31.1288L29.491 32.8712ZM56.9938 15.6304L30.1861 0.406325L29.1984 2.14545L56.0062 17.3696L56.9938 15.6304ZM55.5 47.4117L28.5142 62.4096L29.4858 64.1578L56.4716 49.1599L55.5 47.4117ZM29.4791 62.406L2 47.4066L1.04177 49.1621L28.5209 64.1615L29.4791 62.406ZM2 47.4066V16.5H0V47.4066H2ZM38.9887 5.98633L12.4773 21.7608L13.5 23.4796L40.0113 7.70509L38.9887 5.98633ZM44.9752 10.1488L19.4503 25.8868L20.5 27.5892L46.0248 11.8512L44.9752 10.1488ZM18.5 27.5892V34.432H20.5V27.5892H18.5ZM18.5 34.432L13.5 32.1063L12.6565 33.9197L17.6565 36.2454L18.5 34.432ZM13.5 32.1063V23.4796H11.5V32.1063H13.5ZM28 32V63.2837H30V32H28ZM55.5 16.5V47.4117H57.5V16.5H55.5ZM13.5 32.1063L13.5 32.1063H11.5C11.5 32.8842 11.9511 33.5916 12.6565 33.9197L13.5 32.1063ZM12.4773 21.7608C11.8713 22.1214 11.5 22.7744 11.5 23.4796H13.5L13.5 23.4796L12.4773 21.7608ZM2 47.4066L2 47.4066H0C0 48.1382 0.399541 48.8115 1.04177 49.1621L2 47.4066ZM56.4716 49.1599C57.1063 48.8071 57.5 48.1379 57.5 47.4117H55.5L55.5 47.4117L56.4716 49.1599ZM19.4503 25.8868C18.8597 26.251 18.5 26.8953 18.5 27.5892H20.5L20.5 27.5892L19.4503 25.8868ZM18.5 34.432L18.5 34.432L17.6565 36.2454C18.9823 36.8621 20.5 35.8941 20.5 34.432H18.5ZM29.1984 2.14545L29.1984 2.14545L30.1861 0.406325C29.5822 0.0634189 28.8438 0.058246 28.2352 0.392662L29.1984 2.14545Z"
                    fill={colors.greyBlack}
                  />
                </svg> */}
                </div>
                <List>
                  <li>{'Dedicated'}</li>
                  <li>{'Curtain-side'}</li>
                  <li>{'Power Only'}</li>
                </List>
              </Section>
            </ServicesLayout>
          </div>
        </Layout>
      </Content>
    </Page>
  );
}

const Content = styled('div', {
  paddingBottom: '5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const Header = styled('div', {
  paddingBottom: '.5rem',
  '@desktop': {
    paddingBottom: '1rem',
  },
});

const List = styled('ul', {
  listStyleType: 'none',
  margin: '0px',
  li: {
    fontWeight: '$normal',
    fontFamily: '$base',
    fontSize: '$h3',
  },
  'li:before': {
    content: '-',
    position: 'absolute',
    marginLeft: '-20px',
  },
});

const Layout = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '2rem',
  margin: '0rem 1rem',

  '@tablet': {
    gap: '1.875rem',
    margin: '0rem 1.875rem',
  },

  '@desktop': {
    gap: '1.875rem',
    margin: '0rem 3.875rem',
  },
});

const ServicesLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',

  '@desktop': {
    margin: '0rem 3.875rem',
  },
});

const Section = styled('div', {
  display: 'flex',
  borderRadius: '15px',
  width: '100%',
  border: '2px solid $greyBlack',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  justifyContent: 'space-between',
  gap: '1rem',

  '.section-svg': {
    height: '118px',
  },
  '@tablet': {
    padding: '2rem 6rem',
    flexDirection: 'row',
    gap: '2rem',
  },

  variants: {
    variant: {
      reverse: {
        flexDirection: 'column-reverse',
        '@tablet': {
          flexDirection: 'row',
        },
      },
      logoSvg: {
        display: 'none',
        '@tablet': {
          display: 'flex',
          borderRadius: '15px',
          width: '100%',
          border: '2px solid $greyBlack',
          padding: '1rem',
        },
      },
    },
  },
});
