import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../type';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.page.html',
  styleUrls: ['./pokecard.page.scss'],
})
export class PokecardPage implements OnInit {
  pokemon: Pokemon;
  pokemonList: Pokemon[];
  id: number;
  desc: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private router: Router
  ) {}

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.pokemonList = await this.storage.get('pokemons');
    this.pokemon = this.pokemonList[this.id - 1];
  }
  navigate() {
    this.router.navigate(['/home']);
  }
}
