import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class Action {

  static INCREMENT: string = 'INCREMENT';
  static DECREMENT: string = 'DECREMENT';

  constructor(private ngRedux: NgRedux<{}>) { }

  increment() {
    this.ngRedux.dispatch({ type: Action.INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: Action.DECREMENT });
  }

}
