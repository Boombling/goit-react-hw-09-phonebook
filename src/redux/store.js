import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { phonebookReduser } from './phonebook';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitlist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: phonebookReduser,
  },
  middleware,
  devContacts: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);

export default {store, persistor};