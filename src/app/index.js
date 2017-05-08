import { createStore } from 'redux';

function playlist(state = []) {
    return state;
}

const store = createStore(playlist);//это хранилище данных в приложении

console.log(store.getState());