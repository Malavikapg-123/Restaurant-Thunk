import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// creating Thunk
// Thunk is used to make API calls in redux
export const fetchRestaurant = createAsyncThunk('restaurentList/fetchRestaurant', () => {
    const result = axios.get('/restaurant.json').then(response => response.data.restaurants)
    console.log("Restaurant data");
    console.log(result);
    return result;
})

const restaurantSlice = createSlice({
    name: "restaurentList",
    initialState: {
        // pending state
        loading: false,
        // resolve state
        allRestaurant: [],
        // rejected state
        error: "",
        // to store search results
        searchRestaurent:[]
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.allRestaurant = action.payload;
            state.searchRestaurent=action.payload
            state.loading = false;
            state.error = "";
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurant = [];
            state.error = action.error.message;
        })
    },
    reducers: {
        search: (state, action) => {
            state.allRestaurant = state.allRestaurant.filter(item => item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})
export default restaurantSlice.reducer;
export const {search}=restaurantSlice.actions;