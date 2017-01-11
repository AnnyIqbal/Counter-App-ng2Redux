import { Action } from './actions';

const initialState: { counter: number } = { counter: 0};

export const reducer = function(state: { counter: number } = initialState, action: { type: string }): {} {
    switch(action.type) {
        case 'INCREMENT':
            return state.counter + 1;
        case 'DECREMENT':
            return state.counter - 1;
        default:
            return state;
    }
}