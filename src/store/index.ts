import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { authReducer } from './auth/reducers';
import { feedReducer } from './feed/reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: []
};

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer
});

export type RootState = ReturnType<typeof rootReducer>;
// typed useSelector avoid redeclare state type
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer, compose(...enhancers));
export const store = createStore(rootReducer, compose(...enhancers));
// export const persistor = persistStore(store);

