export interface Ipokemon {
    name: string;
    url: string;
}

export interface IpokemonList {
    count: number;
    next: string;
    previous: string;
    result: Ipokemon[];
}