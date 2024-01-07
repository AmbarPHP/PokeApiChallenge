import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//fetching product using build in thunk on toolkit
export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons', // Corrected namespace 'pokemon'
    async () => {
        try {
            const respuestaPrincipal = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");

            const resultados = respuestaPrincipal.data.results;
            const urls = resultados.map((item) => item.url);

            const respuestasSecundarias = await Promise.all(urls.map(url => axios.get(url)));

            const datosCombinados = respuestasSecundarias.map(resp => resp.data);

            return datosCombinados;
        } catch (error) {
            // Manejar errores
            console.error('Error:', error);
            throw new Error('Hubo un error al obtener los datos');
        }
    });


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
