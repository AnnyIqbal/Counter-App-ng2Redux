import { NgModule } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from 'ng2-redux';
import { Observable } from 'rxjs';
//reducer
import { counterReducer } from './reducer';

//actions 
import { MyAction } from './actions';
export { MyAction } from './actions';

@NgModule({
    providers: [ MyAction ]
})
export class StoreModule {
    constructor(private ngRedux: NgRedux<{}>,
                private devTool: DevToolsExtension
                ) {
                    // console.dir(this.ngRedux.configureStore) //just to log it
                    this.ngRedux.configureStore (
                        counterReducer,                 //reducer
                        {counter: 0},                   //default state,
                        null,                           //middleware (specify it must for correct mapping of parameters)
                        [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
                    )
                  }
}