import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAction } from './actions';

@Injectable()
export class Epics {
    constructor() { }

    incrementTime = (action$) =>
        action$.ofType(MyAction.INCREMENT)
            .do((x) => { console.log(x, "ssssssssssssssssssssssssssss") })
            .switchMap(() => {
                console.log("vvvvvvvvvvvvvv") 
                return Observable.of( {
                    type: MyAction.INCREMENT_TIME,
                    payload: 'increment time'
                })
            })
            .catch(err => Observable.of({
                type: MyAction.ERROR
            })
            );

    decrementTime = (action$) =>
        action$.ofType(MyAction.DECREMENT_TIME)
            .mapTo({
                type: MyAction.DECREMENT,
                payload: 'decrement time'
            },
            console.log('|||||||||'))
            .catch(err => Observable.of({
                type: MyAction.ERROR
            })
            );
}