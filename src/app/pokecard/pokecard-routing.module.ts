import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokecardPage } from './pokecard.page';

const routes: Routes = [
  {
    path: '',
    component: PokecardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokecardPageRoutingModule {}
