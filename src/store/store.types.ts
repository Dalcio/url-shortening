export type TShortedLink = {
  link: string;
  shortedLink: string;
  copied: boolean;
};

export type TStoreState = {
  shortedLinks: TShortedLink[];
};

export type TStoreActions = {
  toggleCopiedLink: (idx: number) => string | undefined;
  shorterLink: (link: TShortedLink) => void;
};

export type TStore = TStoreState & TStoreActions;
