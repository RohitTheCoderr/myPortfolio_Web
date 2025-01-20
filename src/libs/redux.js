// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

// Import reducers from slices
import authReducer from "../utils/reduxSlices/authSlice"
import settingsReducer from "../utils/reduxSlices/settingSlice"
import profileReducer from "../utils/reduxSlices/profileSlice"
// Step 1: Create persist configuration for each slice that needs persistence (optional)
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],  // Only persist the token
};

const profilePersistConfig = {
  key: 'profile',
  storage,
};

// Step 2: Combine reducers
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), // Persist auth
  profile: persistReducer(profilePersistConfig, profileReducer), // Persist profile
  settings: settingsReducer,  // No persistence for settings
  // counter: counterReducer,    
});

// Step 3: Create the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore persist actions
      },
    }),
});

// Step 4: Set up persistor for persisted reducers
export const persistor = persistStore(store);
export default store;

