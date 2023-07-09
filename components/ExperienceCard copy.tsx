import { useState } from 'react';
import { colors, styled } from '../stitches.config';
import Button from './Button';
import Text from './Text';

interface ExperienceCardProps {
  title?: string;
  employer?: string;
  date?: string;
  descriptionElement?: React.ReactElement;
}

export const ExperienceCard = ({
  title,
  employer,
  date,
  descriptionElement,
}: ExperienceCardProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ExperienceCardWrap>
      <Top>
        <ImageWrap></ImageWrap>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            // paddingBottom: '1rem',
          }}
        >
          <Text color={'grey'} size={'body'}>
            Description
          </Text>
          <Button onClick={() => setIsExpanded(!isExpanded)} width={'inline'}>
            Learn more
          </Button>
        </div>
        <DescriptionWrap
          className={'information' && isExpanded ? 'expanded' : 'collapsed'}
        >
          Ex aute esse Lorem id minim nulla ullamco duis elit sint deserunt
          eiusmod. Magna nulla nostrud commodo anim minim laboris et et officia
          deserunt id ea. Culpa fugiat reprehenderit ullamco nostrud proident
          esse exercitation in id sint est laboris eiusmod. Et aute consequat
          irure labore incididunt. Ad cupidatat nulla amet proident excepteur
          consectetur exercitation quis incididunt enim velit ut nisi. Nostrud
          aliqua qui esse et ea eu ipsum. Labore cillum incididunt id nostrud
          exercitation ad irure est et adipisicing quis velit Lorem sint.
        </DescriptionWrap>
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

  '.information': {
    transition: 'all .5s',
  },
  '.expanded': {
    transition: 'all .5s',
    maxHeight: '280px',
  },
  '.collapsed': {
    transition: 'all .5s',
    maxHeight: 0,
    // height: 'unset',
  },
});

const ImageWrap = styled('div', {
  display: 'block',
  height: '48px',
  width: '48px',
  borderRadius: '15px',
  backgroundColor: '#EDEEF0',
});

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
  gap: '1rem',
});

const Bottom = styled('div', {
  // display: 'flex',
  overflow: 'hidden',
  // flexDirection: 'column',
  padding: '1rem',
  // justifyContent: 'space-between',

  borderTop: '1px solid #EDEEF0',
});
const SkillPill = styled('div', {});
const SkillsWrap = styled('div', {});
const DescriptionWrap = styled('div', {
  display: 'flex',
  paddingTop: '1rem',
  overflow: 'hidden',
  // padding: '1rem',
});

export default ExperienceCard;
