import { createContext, useContext } from 'react';
import SearchStore from './stores/searchStore';
import CommonStore from './stores/commonStore';
import WikiPageStore from './stores/wikiPageStore';
import AuthStore from './stores/authStore';

interface Store {
    authStore: AuthStore;
    commonStore: CommonStore;
    searchStore: SearchStore;
    wikiPageStore: WikiPageStore;
}

export const store: Store ={
    authStore: new AuthStore(),
    commonStore: new CommonStore(),
    searchStore: new SearchStore(),
    wikiPageStore: new WikiPageStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
