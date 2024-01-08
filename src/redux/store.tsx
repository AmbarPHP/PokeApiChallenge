import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../redux/slices/pokemonSlice';
import pokemonImagenReducer from '../redux/slices/pokemonImagenSlice';

// Combinar todos los reducers
const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    imagen: pokemonImagenReducer,
});

// Configurar el store con middleware personalizado
export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

