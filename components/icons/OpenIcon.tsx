export interface OpenIconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

export const OpenIcon = ({
  color = '#1E1E1E',
  width = 16,
  height = 16,
}: OpenIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="1.06667" rx="0.533333" fill="#1E1E1E" />
      <rect
        y="7.46667"
        width="16"
        height="1.06667"
        rx="0.533333"
        fill={color}
      />
      <rect
        y="14.9333"
        width="16"
        height="1.06667"
        rx="0.533333"
        fill={color}
      />
    </svg>
  );
};

export default OpenIcon;
