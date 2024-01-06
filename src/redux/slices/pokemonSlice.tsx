
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    pokemonData: [],
    loading: false,
    error: ''
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {

                state.loading = false;
                state.pokemonData = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });
    },
});

//fetching product using build in thunk on toolkit
export const fetchPokemons = createAsyncThunk(
    'products/fetchProducts', // Corrected namespace 'product'
    async () => {
        const data = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
            .then((res) => res.data);

        return data;
    }
);



export default pokemonSlice.reducer;


