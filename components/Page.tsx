import Head from 'next/head';
import { styled } from '../stitches.config';

const CustomPageLayout = styled('div', {
  variants: {
    background: {
      lightBlue: {
        backgroundColor: '$lightBlue',
      },
      default: {
        backgroundColor: '$white',
      },
    },
  },
  defaultVariants: {
    background: 'default',
  },
});

interface CustomPageProps {
  title: string;
  children: React.ReactNode;
  background?: 'lightBlue' | 'default';
}

export const Page = (props: CustomPageProps) => {
  const title = `${props.title} - eriqq`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <CustomPageLayout background={props.background}>
        {props.children}
      </CustomPageLayout>
    </>
  );
};

export default Page;
