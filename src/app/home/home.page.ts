import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../type';

@Component({
  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemons: Pokemon[] = [];

  constructor(private pokedexService: PokedexService) {}

  async ngOnInit() {
    this.pokemons = await this.pokedexService.getPokemons();
    console.log(this.pokemons);
  }

  async pokeClick() {}
}
