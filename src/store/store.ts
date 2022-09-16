import { StateCreator } from 'zustand';
import { TStore, TStoreActions } from './store.types';

export const storeInit: TStore = {
  shortedLinks: [
    {
      link: 'https://dalciogarcia.vercel.app',
      shortedLink: 'https://dalciogarcia.vercel',
      copied: true,
    },
    {
      link: 'https://github.com/dalcio',
      shortedLink: 'https://gb.com/dalcio',
      copied: false,
    },
  ],
  toggleCopiedLink: () => undefined,
};

export const storeActions: StateCreator<TStore, any, any, TStoreActions> = (set, get) => ({
  toggleCopiedLink(idx) {
    const { shortedLinks } = get();
    const temp = [...shortedLinks];

    for (let i = 0; i < temp.length; i += 1) {
      temp[i].copied = false;
    }

    temp[idx].copied = true;

    set({ shortedLinks: [...temp] });

    return temp[idx].shortedLink;
  },
});
