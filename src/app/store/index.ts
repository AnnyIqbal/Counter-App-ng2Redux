import { NgModule } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';

//reducer
import { counterReducer, initialState } from './reducer';

//actions 
import { MyAction } from './actions';
export { MyAction } from './actions';

//middlewares
import { Epics } from './epics';

@NgModule({
    providers: [ MyAction, Epics ]
})
export class StoreModule {
    constructor(private ngRedux: NgRedux<{}>,
                private devTool: DevToolsExtension,
                private epics: Epics
                ) {
                    const middleware = [
                        createEpicMiddleware(this.epics.incrementTime),
                        createEpicMiddleware(this.epics.decrementTime),
                        createEpicMiddleware(this.epics.incrementIfOdd)
                    ];

                    // console.dir(this.ngRedux.configureStore) //just to log it
                    this.ngRedux.configureStore (
                        counterReducer,                 //reducer
                        initialState,                   //default state must be a value not empty object,
                        middleware,                     //middleware (specify it must for correct mapping of parameters)
                        [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
                    )
                  }
}