import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { Pokemon, PokemonBasic } from './type';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  baseUrlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';
  baseUrlKanto = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
  pokemonBasics: any;
  pokemons: any;
  pokemonIteration: Pokemon;
  pokemonsSpecies: any;
  pokemonDetails: any;
  pokemonArray: Pokemon[] = [];
  res: any;
  resBis: any;

  constructor(private http: HttpClient) {}

  async getPokemons(): Promise<Pokemon[]> {
    try {
      await this.getPokemonBasicsApi();
      for (const pokemonBasic of this.pokemonBasics.results) {
        let types = [];
        this.pokemonIteration = null;
        await this.getPokemonApi(pokemonBasic);
        await this.getPokemonSpeciesApi(this.pokemons.id);
        let description = this.getFrenchDescription(this.pokemonsSpecies);
        let name = this.getFrenchName(this.pokemonsSpecies);
        this.pokemons.types.forEach((t) => {
          types.push(t.type.name);
        });
        this.pokemonIteration = {
          id: this.pokemons.id,
          name,
          sprite: this.pokemons.sprites.front_default,
          artwork:
            this.pokemons.sprites.other['official-artwork'].front_default,
          types,
          description,
          surname: this.pokemonsSpecies.genera[3].genus,
          evolutionChain: 0,
        };
        this.pokemonArray.push(this.pokemonIteration);
      }
      return this.pokemonArray;
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemonBasicsApi(): Promise<PokemonBasic[]> {
    try {
      this.pokemonBasics = await this.http.get(this.baseUrlKanto).toPromise();
      return this.pokemonBasics;
    } catch (error) {}
  }

  async getPokemonApi(pokemonBasic: PokemonBasic): Promise<Pokemon[]> {
    try {
      this.pokemons = await this.http.get(pokemonBasic.url).toPromise();

      return this.pokemons;
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemonSpeciesApi(id: number): Promise<Pokemon[]> {
    try {
      this.pokemonsSpecies = await this.http
        .get(this.baseUrlSpecies + id)
        .toPromise();
      return this.pokemonsSpecies;
    } catch (error) {
      console.log(error);
    }
  }

  getFrenchDescription(pokeSpeciesJson): string {
    let flavorTextList: string[] = [];
    pokeSpeciesJson.flavor_text_entries.forEach((element) => {
      if (element.language.name == 'fr') {
        flavorTextList.push(element.flavor_text);
      }
    });
    return flavorTextList[0];
  }

  getFrenchName(pokeSpeciesJson): string {
    let names: string[] = [];
    pokeSpeciesJson.names.forEach((element) => {
      if (element.language.name == 'fr') {
        names.push(element.name);
      }
    });
    return names[0];
  }
}
