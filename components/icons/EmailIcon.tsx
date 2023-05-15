import { colors } from '../../stitches.config';

export interface EmailIconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

export const EmailIcon = ({
  color = colors.greyBlack,
  width = 99,
  height = 63,
}: EmailIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 2.99432L43.9183 35.2071C46.1852 36.9388 49.5452 36.9251 51.794 35.175L94 2.32955M33.5041 27.5909L2.5 58.1705M61.4835 27.5909L94 58.1705M5.5 1H91C93.4853 1 95.5 2.78577 95.5 4.98864V55.5114C95.5 57.7142 93.4853 59.5 91 59.5H5.5C3.01472 59.5 1 57.7142 1 55.5114V4.98864C1 2.78577 3.01472 1 5.5 1Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default EmailIcon;
