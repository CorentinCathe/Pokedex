import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  baseUrl = '';
  res: any;

  constructor() {}
}
