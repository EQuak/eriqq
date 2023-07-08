import { styled } from '../stitches.config';

interface ToggleProps {
  className: string;
  isChecked: boolean;
  handleToggleClick: (value: boolean) => void;
}

export const Toggle = ({
  isChecked,
  handleToggleClick,
  className,
}: ToggleProps): JSX.Element => {
  return (
    <ToggleWrap className={className}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            handleToggleClick(!isChecked);
          }}
        />
      </label>
    </ToggleWrap>
  );
};

const ToggleWrap = styled('div', {
  verticalAlign: 'middle',
  display: 'inline-block',
  float: 'right',
  transition: 'transform 0.3s ease-out',
  zIndex: 999,
  position: 'relative',
  width: '32px',
  height: '32px',

  label: {
    display: 'block',
    cursor: 'pointer',
    width: '32px',
    height: '32px',
  },

  input: {
    appearance: 'none',
    padding: 0,
    margin: 0,
    outline: 'none',
    pointerEvents: 'none',
    position: 'relative',
    width: '32px',
    height: '2px',
    background: '$black',
    transition: 'all 0.45s ease-in-out',
  },

  'input::before, input::after': {
    content: '',
    position: 'absolute',
    height: '2px',
    background: '$black',
    borderRadius: '2px',
    transition: 'all 0.45s ease-in-out',
  },

  'input::before': {
    width: '25px',
    transform: 'translateY(-8px)',
    right: 0,
  },

  'input::after': {
    width: '32px',
    transform: 'translateY(8px)',
  },

  'input:checked': {
    transform: 'translateX(-40px)',
    background: 'transparent',
  },

  'input:checked::before': {
    width: '32px',
    transform: 'rotate(45deg) translate(26px, -26px)',
  },

  'input:checked::after': {
    transform: 'rotate(-45deg) translate(26px, 26px)',
  },
});

export default Toggle;
