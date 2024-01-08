// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonSlice';


const store = configureStore({
    reducer: {
        pokemons: pokemonReducer
    }
});


export type AppDispatch = typeof store.dispatch;
export default store;
