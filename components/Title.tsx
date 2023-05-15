import Image, { StaticImageData } from 'next/image';
import { styled } from '../stitches.config';
import Text from './Text';

export const TitleLayout = styled('div', {});
export const TextWrap = styled('div', {
  margin: '0rem 1rem',
  position: 'absolute',
  top: '50%',
  left: 0,
});

export const BackgroundWrap = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  img: {
    display: 'block',

    opacity: 0.5,
    margin: 0,
    width: '100%',
    height: '260px',
    '@tablet': {
      height: '480px',
    },
  },
});

export interface TitleProps {
  title: string;
  backgroundSource?: StaticImageData;
  alt?: string;
}

export const Title = (props: TitleProps) => {
  return (
    <TitleLayout>
      <Text type="label" size="title">
        {props.title}
      </Text>
    </TitleLayout>
  );
};

export const ImageTitle = (props: TitleProps) => {
  return (
    <TitleLayout>
      <BackgroundWrap>
        <Image
          src={props.backgroundSource ?? ''}
          alt={props.alt ?? ''}
          placeholder="blur"
        />
        <TextWrap>
          <Text type="label" size="title">
            {props.title}
          </Text>
        </TextWrap>
      </BackgroundWrap>
    </TitleLayout>
  );
};

export default Title;
