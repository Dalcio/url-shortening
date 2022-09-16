import useStore from 'store';

const useShorten = () => {
  const toggleCopiedLink = useStore((s) => s.toggleCopiedLink);

  const handleCopyLink = (idx: number) => {
    const linkToCopy = toggleCopiedLink(idx);

    if (navigator && linkToCopy) {
      navigator.clipboard.writeText(linkToCopy);
    }
  };

  return { handleCopyLink };
};

export default useShorten;
