import axios from './config';

export function getPokemon(pokemon:string) {
  return axios.get(`/pokemon/${pokemon}`);
}