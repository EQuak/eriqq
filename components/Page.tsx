import Head from 'next/head';
import { styled } from '../stitches.config';

const CustomPageLayout = styled('div', {
  paddingTop: '6rem',
  height: 'auto',
  variants: {
    fullPage: {
      true: {
        height: 'calc(100% - 124px)',
      },
    },
  },
  '@tablet': {
    paddingTop: '6rem',
  },
});

interface CustomPageProps {
  title: string;
  fullPage?: boolean;
  children: React.ReactNode;
}

export const Page = (props: CustomPageProps) => {
  const title = `${props.title} - eriqq`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <CustomPageLayout fullPage={props.fullPage}>
        {props.children}
      </CustomPageLayout>
    </>
  );
};

export const Section = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});

export default Page;
