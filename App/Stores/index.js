import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from '../Reducers/index'; //Import the reducer

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
