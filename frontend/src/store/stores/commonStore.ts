import { makeAutoObservable } from 'mobx';

export default class CommonStore {
    constructor() {
        makeAutoObservable(this);
    }

    error: Error | undefined = undefined;
    token: string | undefined = undefined;

    setError = (value: Error | undefined) => {
        this.error = value;
    }

}