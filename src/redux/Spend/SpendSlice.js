import { createSlice }  from "@reduxjs/toolkit";
import productsJSON from "./products.json";

const data = productsJSON.products;

export const spendSlice = createSlice({
    name: 'spend',
    initialState: {
        items: data,
        budget: 100000000000,
        initialMoney: 100000000000,
    },
    reducers: {
        updateBudget: (state, action) => {
            const { count, id } = action.payload; 

            const product = state.items.find((product) => product.id === id);
            product.count = count;            
            
            state.budget = state.initialMoney - state.items.reduce((acc, product) => acc + product.count * product.productPrice, 0);
            
        },

    }
})

export const { updateBudget } = spendSlice.actions;
export default spendSlice.reducer;