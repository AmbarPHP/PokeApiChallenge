export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemonList {
    count: number;
    next: string;
    previous: string;
    result: IPokemon[];
}

export interface RootState {
    pokemon: {
        pokemonData: IPokemon[];
        loading: boolean;
        error: string;
    };
}