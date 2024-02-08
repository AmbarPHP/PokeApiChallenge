import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//fetching product using build in thunk on toolkit
export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons', // Corrected namespace 'pokemon'
    async (url: string) => {

        const data = await axios.get(url)
            .then((res) => res.data);

        return data;
    }
);

const initialState = {
    pokemonData: {},
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
                state.error = "";
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

export default pokemonSlice.reducer;
