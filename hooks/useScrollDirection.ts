import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [isFixed, setIsFixed] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      // const goingDown = scrollY > lastScrollY;
      const goingUp = scrollY < lastScrollY;
      // const diff = 2;

      // const stateNotMatched = goingDown !== isFixed;
      // const scrollDownTooFast = scrollY - lastScrollY > diff;
      // const scrollUpTooFast = scrollY - lastScrollY < -diff;

      if (scrollY > 296) {
        setIsFixed(true);
      }
      if (isFixed && goingUp && scrollY < 296) {
        setIsDismissed(true);
        setTimeout(() => {
          setIsDismissed(false);
          setIsFixed(false);
        }, 200);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [isFixed, isDismissed]);

  return { isFixed, isDismissed };
}
