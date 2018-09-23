import { createStore } from 'redux';


function login(state, action){
    if(action.type === 'LOGIN'){
       console.log("oooook"+ action.user );
        return {...state,
        user:action.user}
    }
    return state;
};

const store = createStore(login, window.STATE_FROM_SERVER);
console.log("store"+store);

export default store ;