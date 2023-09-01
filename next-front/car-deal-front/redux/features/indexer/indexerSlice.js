import { createSlice } from "@reduxjs/toolkit";
import { numOfSteps } from "@/components/modules/cars/newCar/FormHeader";

const initialState = {
    indexValue: 1,
}

const indexerSlice = createSlice({
    name: "indexer",
    initialState,
    reducers: {
        increase: (state) => {
            // if (state < 3) {
            //     state.indexValue++;
            // }
            state.indexValue++
        },
        decrease: (state) => {
            // if (state <= 3 && state > 1) {
            //     state.indexValue--;
            // }
            state.indexValue--
        }
    }
})

export default indexerSlice.reducer;
export const { increase, decrease } = indexerSlice.actions;
export const selectIndex = (store) => store.indexer.indexValue;