import { Component } from '@angular/core';
import { createStore } from 'redux';

const counter = (state = 0, action) => { //reducer
  switch(action.type){
    case 'increment': {
      return state + 1;
    }
    case 'decrement': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(counter); // store

const render = () => {
  console.log(store.getState());
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux Counter App!';
  initialState: number = 0; // initial state

// actions
  increment() {
    this.initialState++;
    store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.initialState--;
    store.dispatch({ type: 'decrement' });
  }
}

store.subscribe(render);
render();

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'increment' });
// });

