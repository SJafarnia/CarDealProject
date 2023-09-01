import { configureStore } from "@reduxjs/toolkit";
import indexerSlice from "./features/indexer/indexerSlice";

const store = configureStore({
    reducer: {
        indexer: indexerSlice,
    },
})

export default store