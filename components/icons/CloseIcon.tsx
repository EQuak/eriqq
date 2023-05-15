export interface CloseIconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

export const CloseIcon = ({
  color = '#1E1E1E',
  width = 16,
  height = 16,
}: CloseIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.70709"
        y="2"
        width="16"
        height="1"
        rx="0.5"
        transform="rotate(45 2.70709 2)"
        fill={color}
      />
      <rect
        x="2"
        y="13.3137"
        width="16"
        height="1"
        rx="0.5"
        transform="rotate(-45 2 13.3137)"
        fill={color}
      />
    </svg>
  );
};

export default CloseIcon;
