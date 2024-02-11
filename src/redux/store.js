import { Tuple, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createLogger } from "redux-logger";
import arSlice from "./reducerSlicer/arSlice";

const logger = createLogger();

const reducer = combineReducers({
    ar: arSlice
})

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: [logger],
    middleware: () => new Tuple(logger),
});

export const persist = persistStore(store);
