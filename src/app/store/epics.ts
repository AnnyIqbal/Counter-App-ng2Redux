import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAction } from './actions';

@Injectable()
export class Epics {
    constructor() { }

    incrementTime = (action$) =>
        action$.ofType(MyAction.INCREMENT) // the action dispatched by the app is input to the epic
            .do((x) => { console.log(x, "INCREMENT OBJ") })
            .switchMap(() => {
                // console.log("vvvvvvvvvvvvvv") 
                return Observable.of({
                    type: MyAction.INCREMENT_TIME, // the action sent to reducer is the output from epic
                    payload: 'increment time'
                })
            })
            .catch(err => Observable.of({
                type: MyAction.ERROR
            })
            );

    decrementTime = (action$) =>
        action$.ofType(MyAction.DECREMENT)
            .do((x) => { console.log(x, "DECREMENT OBJ") })
            .switchMap(() => {
                return Observable.of({
                    type: MyAction.DECREMENT_TIME,
                    payload: 'decrement time'
                })
            })
            .catch(err => Observable.of({
                type: MyAction.ERROR
            })
            );
}