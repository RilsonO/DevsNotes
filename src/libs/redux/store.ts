import {AnyAction, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import {NotesState} from './reducers/notes.reducer';

import rootReducers from './reducers';

interface Notes {
  notes: NotesState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const pReducer = persistReducer<Notes, AnyAction>(persistConfig, rootReducers);
const store = createStore(pReducer);
const persistor = persistStore(store);

export {store, persistor};
