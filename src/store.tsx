import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ProductReducer from './redux/slices/Product/ProductSlice';
import StockReducer from './redux/slices/Product/StockSlice';
import PriceReducer from './redux/slices/Product/PriceSlice';
import CartReducer from './redux/slices/cart/CartSlice';

// Configuración de persistencia para cada reducer
const persistConfigProduct = {
    key: 'product',
    storage,
};

const persistConfigStock = {
    key: 'stock',
    storage,
};

const persistConfigPrice = {
    key: 'price',
    storage,
};

const persistConfigCart = {
    key: 'cart',
    storage,
};

// Aplicar persistReducer a cada reducer
const persistedProductReducer = persistReducer(persistConfigProduct, ProductReducer);
const persistedStockReducer = persistReducer(persistConfigStock, StockReducer);
const persistedPriceReducer = persistReducer(persistConfigPrice, PriceReducer);
const persistedCartReducer = persistReducer(persistConfigCart, CartReducer);

// Combinar todos los reducers
const rootReducer = combineReducers({
    products: persistedProductReducer,
    stock: persistedStockReducer,
    price: persistedPriceReducer,
    cart: persistedCartReducer,
});

// Crear el store configurado
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Crear el persistor
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export default store;
