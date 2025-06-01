import { makeAutoObservable } from 'mobx';
import { PagingParams } from '../../models/common';

export default class SearchStore {
    constructor() {
        makeAutoObservable(this);
    }

    pagingParams: PagingParams | undefined = undefined;
    searchQry: string | undefined = undefined;
    setPagingParams = (value: PagingParams | undefined) => {
        this.pagingParams = value;
    }


    
}