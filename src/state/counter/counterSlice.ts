import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Define state and actions for our counter slice
interface CounterState {
    value: number;
}

// initializes to Zero
const initialState: CounterState = {
    value: 0,
};

// 
const counterSlice = createSlice({
    name: 'counter', 
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Action takes a payload, Payload action can also take an interface
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    // extra reducers are for async and can be chained
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        })
        .addCase(incrementAsync.pending, (state, action) => {
            console.log("Waiting");
        }) 
    }

});

// We define the name ourselves, in the functions above, it's implicit 
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 500 ));
        return amount;
    }
);

// We're able to get the actions from the reducers from the actions
export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer;
