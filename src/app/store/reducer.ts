export const initialState = { counter: 0 };

export const counterReducer = function(state = initialState, action: { type: string, payload?: any }): {} {
    switch(action.type) {       
        case 'INCREMENT_TIME':
            // console.log('state INCREMENT ', state);
            console.log('++ INCREMENT_TIME', action.payload);
            return Object.assign({}, state,  {counter: state.counter + 1}) ;
            
        case 'DECREMENT_TIME':
            // console.log('state DECREMENT ', state, Object.assign({}, state, {counter: state.counter - 1}));
            console.log('-- DECREMENT_TIME', action.payload);
            return Object.assign({}, state, {counter: state.counter - 1}) ;
        default:
            return state;
    }
}