
import {httpClientPlugin as http} from '../plugins'

export const getPokemonById = async( id: number ): Promise<string> => {

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const pokemon = await http.get( url );
    return pokemon.name;

  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }

}
