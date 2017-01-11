import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';
import {MyAction } from './store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux Counter App!';
  counter: number = 0; // initial state

    @select(['counter']) state$: Observable<any>; // @select(['property of obj if u have a single reducer, else 1st arg is obj 2nd arg is its property'])
    constructor(private a: MyAction) { //injecting actions
      this.state$.subscribe(x => {
        console.log('state: ', x);
      });
    }

// actions
  increment() {
    // this.counter++;
    this.a.increment();
  }
  decrement() {
    // this.counter--;
     this.a.decrement();
  }
}