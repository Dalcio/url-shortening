import { useState } from 'react';

const useHeader = () => {
  const [hide, setHide] = useState<boolean>(false);

  const handleHide = () => {
    setTimeout(() => {
      setHide((prev) => !prev);
    }, 300);
  };

  return {
    hide,
    handleHide,
  };
};

export default useHeader;
