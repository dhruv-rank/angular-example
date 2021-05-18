import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    //it will create only single instance for whole application
    providedIn: 'root'
    //if you have used 'any' then it will create new instance of service for all lazy loaded modules
})
export class BasicService {

    constructor() {
        console.log('created new instance');
    }

    giveMeSomthingAsync(c) {
        return new Observable(observer => {
            observer.next(c.value.trim().match(/\w*gmail.com$/) ? null : { 'basicError': true });
        });
    }
}