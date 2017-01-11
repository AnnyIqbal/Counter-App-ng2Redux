import { NgModule } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';

//reducer
import { reducer } from './reducer';

//actions 
import { Action } from './actions';
export { Action } from './actions';

@NgModule({
    providers: [ Action ]
})
export class StoreModule {
    constructor(private ngRedux: NgRedux<{}>,
                private devTool: DevToolsExtension
                ) {
                    // console.dir(this.ngRedux.configureStore)
                    this.ngRedux.configureStore (
                        reducer,        //reducer
                        {},             //default state,
                        null,           //middleware (specify it must for correct mapping of parameters)
                        [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
                    )
                  }
}