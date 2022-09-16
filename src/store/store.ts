import { StateCreator } from 'zustand';
import { TStore, TStoreActions } from './store.types';

export const storeInit: TStore = {
  shortedLinks: [],
  toggleCopiedLink: () => undefined,
  shorterLink: () => undefined,
};

export const storeActions: StateCreator<TStore, any, any, TStoreActions> = (set, get) => ({
  shorterLink(link) {
    if (link.link && link.shortedLink) {
      set((draft) => ({
        shortedLinks: [...draft.shortedLinks, link],
      }));
    }
  },
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
