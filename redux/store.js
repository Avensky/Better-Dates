import { configureStore } from '@reduxjs/toolkit'
import memoryReducer from './reducers/memory';
import authReducer from './reducers/auth';
import gameReducer from './reducers/game';

export default configureStore({
    reducer : {
        //auth: authReducer,
        //memory: memoryReducer,
        game: gameReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});