import { createContext, useContext } from 'react';
import SearchStore from './stores/searchStore';
import CommonStore from './stores/commonStore';

interface Store {
    commonStore: CommonStore;
    searchStore: SearchStore;
}

export 
const store: Store ={
    commonStore: new CommonStore(),
    searchStore: new SearchStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
