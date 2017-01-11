import { Component } from '@angular/core';
// import { createStore } from 'redux'; // import isn't requireed because we're creating our custom createStore()

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

// we'll create the createStore() function from scratch to define functionality

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({});

    return {getState, dispatch, subscribe};
}
// createStore ends

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