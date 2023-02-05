import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromptemailPageRoutingModule } from './promptemail-routing.module';

import { PromptemailPage } from './promptemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromptemailPageRoutingModule
  ],
  declarations: [PromptemailPage]
})
export class PromptemailPageModule {}
