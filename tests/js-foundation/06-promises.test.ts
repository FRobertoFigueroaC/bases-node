import { getPokemonById } from "../../src/js-foundation/06-promises";


describe('test for 06-promises', () => {
    test('should return a pokemon', async() => {
        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);    
        expect(pokemonName).toBe('bulbasaur')
    });

    test('should return error', async() => {
        const pokemonId = 0;
        try {
          await getPokemonById(pokemonId);
          expect(true).toBeFalsy();
        } catch (error) {
          expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }
    });

});