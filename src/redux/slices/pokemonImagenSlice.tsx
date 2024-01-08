import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//fetching product using build in thunk on toolkit
export const fetchPokemonImagen = createAsyncThunk(
    'imagen/fetchPokemonImagen', // Corrected namespace 'pokemon'
    async (url: string) => {

        const data = await axios.get(url)
            .then((res) => res.data);
        //debugger
        return data;

    }
);

const initialState = {
    currentPokemonUrl: "",
    singlePokemonData: {},
    loading: false,
    error: ''
};

const pokemonImagenSlice = createSlice({
    name: 'imagen',
    initialState,
    reducers: {
        setCurrentPokemonUrl(state, action) {
            console.log("enviar la url");
            //debugger;
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
                state.singlePokemonData = action.payload;
            })
            .addCase(fetchPokemonImagen.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });

    },
});
export const { setCurrentPokemonUrl } = pokemonImagenSlice.actions;

export default pokemonImagenSlice.reducer;
