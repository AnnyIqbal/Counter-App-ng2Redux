import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAction } from './actions';

// to combine multiple epics if in different files
// import { combineEpics } from 'redux-observable';
// const rootEpic = combineEpics(
//   incrementTime,
//   decrementTime,
//   incrementIfOdd
// );

type LightStore = { getState: Function, dispatch: Function };


@Injectable()
export class Epics {
    constructor() { }

    incrementTime = (action$) => //  the actions stream 'action$' is a redux-observable
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

    // incrementIfOdd = (action$: ActionObservable<Action>, store: LightStore): ActionObservable<Action> => // import kahan se hota hai ye???
    incrementIfOdd = (action$, store: LightStore) =>
       action$.ofType(MyAction.ODD)
        .do((x)=>{ console.log('inc if odd DO', x)})
        .filter(() => store.getState().counter % 2 === 1) 

        // jb {} use ni krte to lambda function me by default return hota hai
        // yhn return ni hora tha islie switchmap me ni jara tha

        // .filter(() => { 
        //     console.log('inc if odd FILTER: ', store.getState().counter % 2);
        //     store.getState().counter % 2 === 1;
        // })

        .switchMap((x) => {
                console.log('switchmap: ', x);
                return Observable.of({
                    type: MyAction.INCREMENT_TIME,
                    payload: 'odd'
                })
          })
            .catch(err => Observable.of({
                type: MyAction.ERROR
            })
        );

}