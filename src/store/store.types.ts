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
};

export type TStore = TStoreState & TStoreActions;
