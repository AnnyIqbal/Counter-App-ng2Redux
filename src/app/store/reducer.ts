export const initialState = { counter: 0 };

export const counterReducer = function(state = initialState, action: { type: string, payload?: any }): {} {
    switch(action.type) {
        case 'INCREMENT':
            // console.log('state INCREMENT ', state);
            return Object.assign({}, state,  {counter: state.counter + 1}) ;
        case 'DECREMENT':
            // console.log('state DECREMENT ', state, Object.assign({}, state, {counter: state.counter - 1}));
            return Object.assign({}, state, {counter: state.counter - 1}) ;
        default:
            return state;
    }
}