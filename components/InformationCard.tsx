import { colors, styled } from '../stitches.config';
import Text from './Text';

interface InformationCardProps {
  descriptionElement?: React.ReactElement;
  links?: [
    {
      url: string;
      icon: string;
    }
  ];
}

export const InformationCard = ({
  links,
  descriptionElement,
}: InformationCardProps): JSX.Element => {
  return <InformationCardWrap></InformationCardWrap>;
};

const InformationCardWrap = styled('div', {});

export default InformationCard;
