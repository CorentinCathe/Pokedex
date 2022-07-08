import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../type';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemons: Pokemon[] = [];

  constructor(
    private pokedexService: PokedexService,
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit() {
    this.storage.create();
    this.pokemons = await this.pokedexService.getPokemons();
    this.storage.set('pokemons', this.pokemons);
  }

  async pokeClick(id: number) {
    this.router.navigate(['/pokecard', id]);
  }
}
