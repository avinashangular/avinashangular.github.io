import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class lmsSessionManager {

    setSession(key:any, value:any) {

        if (typeof key != 'string') {
            key = key.toString();
        }

        if(typeof value != 'string') {
            value = JSON.stringify(value);
        }

        sessionStorage.setItem(key, value);
    }

    getSesstion(key:any) {

        if (typeof key != 'string') {
            key = key.toString();
        }

        const value:string | null = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    clearSession() {
        sessionStorage.clear();
    }

    getSessionLength():number {
       return sessionStorage.length;
    }

}