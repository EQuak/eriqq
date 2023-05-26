import Head from 'next/head';
import { styled } from '../stitches.config';

const CustomPageLayout = styled('div', {
  height: '100%',
  paddingTop: '6rem',

  '@tablet': {
    paddingTop: '6rem',
  },
});

interface CustomPageProps {
  title: string;
  children: React.ReactNode;
}

export const Page = (props: CustomPageProps) => {
  const title = `${props.title} - eriqq`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <CustomPageLayout>{props.children}</CustomPageLayout>
    </>
  );
};

export const Section = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});

export default Page;
