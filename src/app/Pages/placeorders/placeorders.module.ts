import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceordersPageRoutingModule } from './placeorders-routing.module';

import { PlaceordersPage } from './placeorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceordersPageRoutingModule
  ],
  declarations: [PlaceordersPage]
})
export class PlaceordersPageModule {}
