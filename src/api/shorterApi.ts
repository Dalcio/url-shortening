import { API_ENDPOINT } from 'constants/env';
import { TShortedLink } from 'store/store.types';

export const shorterApi = async (url: string): Promise<TShortedLink | undefined> => {
  try {
    const res = await fetch(`${API_ENDPOINT}?url=${url}`);
    const data = await res.json();

    const shortedLink = data?.result?.full_short_link;

    const link: TShortedLink = {
      link: url,
      copied: false,
      shortedLink,
    };

    return link;
  } catch (error) {
    return undefined;
  }
};
