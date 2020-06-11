import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { authReducer } from './auth/reducers';

const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: []
};

const rootReducer = combineReducers({ authReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);

