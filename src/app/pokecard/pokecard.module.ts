import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokecardPageRoutingModule } from './pokecard-routing.module';

import { PokecardPage } from './pokecard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokecardPageRoutingModule
  ],
  declarations: [PokecardPage]
})
export class PokecardPageModule {}
