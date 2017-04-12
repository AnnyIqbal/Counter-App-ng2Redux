import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAction } from './actions';

@Injectable()
export class Epics {
    constructor() { }

    incrementTime = (action$) =>
        action$.ofType(MyAction.INCREMENT_TIME)
            .take(3)
            .setTimeout(function() {
                return {
                    type: MyAction.INCREMENT,
                    payload: null
                };
            }, 3000)
            .catch(err => Observable.of({
                type: MyAction.ERROR
            })
            );

    decrementTime = (action$) =>
        action$.ofType(MyAction.DECREMENT_TIME)
            .take(3)
            .setTimeout(function () {
                return {
                    type: MyAction.DECREMENT,
                    payload: null
                };
            }, 3000)
            .catch(err => Observable.of({
                type: MyAction.ERROR
            })
            );
}