import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { OpenTriviaService } from '../open-trivia.service';

@Component({
  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemons: string[] = [
    'Bulbizare',
    'dracofeu',
    'pingoleon',
    'arceus',
    'corentin',
  ];

  constructor() {}

  pokeClick() {
    console.log('hey');
  }
}
