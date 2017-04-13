import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class MyAction {

  static INCREMENT: string = 'INCREMENT';
  static DECREMENT: string = 'DECREMENT';
  static INCREMENT_TIME: string = 'INCREMENT_TIME';
  static DECREMENT_TIME: string = 'DECREMENT_TIME';
  static ERROR: string = 'ERROR';
  static ODD: string = 'ODD';
  
  constructor(private ngRedux: NgRedux<{}>) { }

  increment() {
    this.ngRedux.dispatch({
        type: MyAction.INCREMENT,
        payload: 'inc' // trial value
      });
  }

  decrement() {
    this.ngRedux.dispatch({ 
        type: MyAction.DECREMENT,
        payload: 'dec' // trial value
    });
  }

  incrementIfOdd() {
    this.ngRedux.dispatch({
        type: MyAction.ODD,
        payload: 'incOdd' // trial value
      });
  }
}
