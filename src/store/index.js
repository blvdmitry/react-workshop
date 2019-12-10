import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { confirmationReducer } from './confirmation';

const rootReducer = combineReducers({ confirmation: confirmationReducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
