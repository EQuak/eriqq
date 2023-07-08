import * as React from 'react';

function getWindowViews() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowViews() {
  const [windowViews, setWindowViews] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      /* we're on the server */
    }
    function handleResize() {
      setWindowViews({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowViews;
}
