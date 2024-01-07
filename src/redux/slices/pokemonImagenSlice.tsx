import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//fetching product using build in thunk on toolkit
export const fetchPokemonImagen = createAsyncThunk(
    'currentPokemon/fetchPokemonImagen', // Corrected namespace 'pokemon'
    async (url: string) => {
        debugger
        const data = await axios.get(url)
            .then((res) => res.data);

        return data;
    }
);

const initialState = {
    currentPokemonUrl: "",
    loading: false,
    error: ''
};

const pokemonImagenSlice = createSlice({
    name: 'currentPokemon',
    initialState,
    reducers: {
        setCurrentPokemonUrl(state, action) {
            console.log("enviar la url");
            debugger;
            state.currentPokemonUrl = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonImagen.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchPokemonImagen.fulfilled, (state, action) => {
                state.loading = false;
                state.currentPokemonUrl = action.payload;
            })
            .addCase(fetchPokemonImagen.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });

    },
});
export const { setCurrentPokemonUrl } = pokemonImagenSlice.actions;

export default pokemonImagenSlice.reducer;
