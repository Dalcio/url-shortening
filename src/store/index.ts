import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';
import { APP_NAME } from 'constants/env';
import { storeActions, storeInit } from './store';
import { TStoreActions, TStore } from './store.types';

let store = combine<TStore, TStoreActions, any, any>(storeInit, storeActions);

store = persist(store, { name: APP_NAME });
store = devtools(store, { name: APP_NAME });

const useStore = create<TStore>(store);

export default useStore;
