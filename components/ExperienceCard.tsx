import { useState } from 'react';
import { colors, styled } from '../stitches.config';
import Button from './Button';
import Text from './Text';
import Pill from './Pill';

interface ExperienceCardProps {
  title?: string;
  employer?: string;
  date?: string;
  description?: string;
  logo?: string;
  skills?: { id: number; skill: string; companies: string[] }[];
  duties: string;
}

export const ExperienceCard = ({
  title,
  employer,
  date,
  description,
  skills,
  logo,
  duties,
}: ExperienceCardProps): JSX.Element => {
  return (
    <ExperienceCardWrap>
      <Top>
        <ImageWrap>
          <img src={logo} />
        </ImageWrap>
        <div>
          <Text weight={'semiBold'} size={'h5'}>
            {title}
          </Text>
          <Text
            color={'grey'}
            size={'body'}
            style={{ paddingBottom: '.25rem' }}
            weight={'semiBold'}
          >
            {employer}
          </Text>
          <Text color={'grey'} size={'body'}>
            {date}
          </Text>
        </div>
      </Top>
      <Bottom>
        <Section>
          <Text size={'body'}>Description</Text>
          <Text size={'body'} weight={'light'}>
            {description}
          </Text>
        </Section>
        <Section>
          <Text size={'body'}>Skills</Text>
          <div>
            {skills?.map((skill) => {
              return <Pill key={skill.id} title={skill.skill} />;
            })}
          </div>
        </Section>
        <Section>
          <Text size={'body'}>Duties</Text>
          <Text size={'body'} weight={'light'}>
            <ul className={'duties-list'}>
              {duties.split('\n').map((item, index) => (
                <li key={index} className="">
                  {item}
                </li>
              ))}
            </ul>
          </Text>
        </Section>
      </Bottom>
    </ExperienceCardWrap>
  );
};

const ExperienceCardWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #EDEEF0',
  borderRadius: '15px',
  overflow: 'hidden',
  backgroundColor: '$white',
  opacity: 0.8,
});

const ImageWrap = styled('div', {
  display: 'block',
  height: '48px',
  width: '48px',
  borderRadius: '15px',
  img: {
    height: '48px',
    borderRadius: '15px',
    width: '48px',
    objectFit: 'fill',
  },
});

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
  gap: '1rem',
});

const Bottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: '1rem',
  borderTop: '1px solid #EDEEF0',
  gap: '.5rem',
});

const Section = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem',

  ul: {
    margin: 0,
    paddingInlineStart: '1rem',
  },
});

export default ExperienceCard;
