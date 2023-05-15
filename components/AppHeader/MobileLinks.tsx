import { styled } from '../../stitches.config';
import { useEffect } from 'react';
import useWindowDimensions from './hooks/useWindowViews';
import { CloseIcon, OpenIcon } from '../icons';

export const MobileLinks = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 575 && isOpen) {
      setIsOpen(!isOpen);
    }
  }, [width, isOpen, setIsOpen]);

  return (
    <MobileDropdownToggleStyled>
      <button
        className="menu-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <CloseIcon /> : <OpenIcon />}
      </button>
    </MobileDropdownToggleStyled>
  );
};

const MobileDropdownToggleStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '@tablet': {
    display: 'none',
  },
  '.menu-button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    background: 'transparent',
    border: 'none',
    padding: 0,
    height: '24px',
    width: '24px',
    cursor: 'pointer',
  },
});

export default MobileLinks;
