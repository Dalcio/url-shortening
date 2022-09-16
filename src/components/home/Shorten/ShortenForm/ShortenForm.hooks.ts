import { shorterApi } from 'api/shorterApi';
import { useState } from 'react';
import useStore from 'store';

const useShortenForm = () => {
  const [link, setLink] = useState<string>('');
  const [isShorting, setIsShorting] = useState(false);
  const shorterLink = useStore((s) => s.shorterLink);
  const [error, setError] = useState<string>('');

  const handleLink = (str: string) => {
    setLink(str);
    error && setError('');
  };

  const onShortenIt = async () => {
    if (link) {
      setIsShorting(true);
      const shortedLink = await shorterApi(link);
      if (shortedLink) {
        shorterLink(shortedLink);
        setLink('');
      }
      setIsShorting(false);
    } else {
      setError('Please add a link');
    }
  };

  return {
    error,
    isShorting,
    link,
    handleLink,
    onShortenIt,
  };
};

export default useShortenForm;
