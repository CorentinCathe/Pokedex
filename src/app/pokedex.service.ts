import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonBasic } from './type';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  baseUrlKanto = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
  pokemons: any;
  pokemonArray: Pokemon[] = [];
  pokemonBasics: any;

  constructor(private http: HttpClient) {}

  async getPokemonBasics(): Promise<PokemonBasic[]> {
    try {
      this.pokemonBasics = await this.http.get(this.baseUrlKanto).toPromise();
      return this.pokemonBasics;
    } catch (error) {}
  }

  async getPokemon(pokemonBasic: PokemonBasic): Promise<Pokemon[]> {
    try {
      this.pokemons = await this.http.get(pokemonBasic.url).toPromise();
      return this.pokemons;
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemons(): Promise<Pokemon[]> {
    try {
      await this.getPokemonBasics();
      this.pokemonBasics.results.forEach(async (pokemonBasic) => {
        await this.getPokemon(pokemonBasic);
        let pokemon: Pokemon = {
          id: this.pokemons.id,
          name: this.pokemons.name,
          sprite: this.pokemons.sprites.front_default,
          types: this.pokemons.types[0].type.name,
          evolutionChain: 0,
        };
        this.pokemonArray.push(pokemon);
      });
      return this.pokemonArray;
    } catch (error) {
      console.log(error);
    }
  }
}
