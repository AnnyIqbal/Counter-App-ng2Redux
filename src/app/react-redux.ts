import { createStore } from 'redux';
var ReactDOM = require('react-dom');
var React = require('react');

// const { createStore } = Redux;

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

const display = ({
    value,
    onIncrement,
    onDecrement
}) => ( React.createElement(
    `<div>
        <h1> {value} </h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>`
));

const store = createStore(counter); // store

const render = () => {
//   console.log(store.getState());
    ReactDOM.render(
        React.createElement(
        `<display value = {store.getState()}
                 onIncrement = {() => 
                    store.dispatch({
                        type: 'increment'
                    })
                }
                onDecrement = {() => 
                    store.dispatch({
                        type: 'decrement'
                    })
                }
    />`),
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
export class AppComponent {
}