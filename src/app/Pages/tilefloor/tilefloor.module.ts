import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TilefloorPageRoutingModule } from './tilefloor-routing.module';

import { TilefloorPage } from './tilefloor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TilefloorPageRoutingModule
  ],
  declarations: [TilefloorPage]
})
export class TilefloorPageModule {}
