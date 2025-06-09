import { makeAutoObservable } from 'mobx';

export default class CommonStore {
    constructor() {
        makeAutoObservable(this);
    }

    error: Error | undefined = undefined;
    token: string | undefined = undefined; 
    language: "ar" | "al" | "ba" | "cn" | "de" | "en" | "es" | "fa" | "fr" | "hi" | "jp" | "ru" | "tr" | "ur"  = "en";
    setError = (value: Error | undefined) => {
        this.error = value;
    }

    setLanguage = (val: "ar" | "al" | "ba" | "cn" | "de" | "en" | "es" | "fa" | "fr" | "hi" | "jp" | "ru" | "tr" | "ur") => {
        this.language = val;
    }
}