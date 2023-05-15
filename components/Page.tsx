import Head from 'next/head';
import { styled } from '../stitches.config';

const CustomPageLayout = styled('div', {
  height: '100%',
  paddingTop: '8rem',
  '@tablet': {
    paddingTop: '9rem',
  },
});

interface CustomPageProps {
  title: string;
  children: React.ReactNode;
}

export const Page = (props: CustomPageProps) => {
  const title = `${props.title} - Melmac`;
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
