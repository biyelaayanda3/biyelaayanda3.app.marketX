import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildmatePageRoutingModule } from './buildmate-routing.module';

import { BuildmatePage } from './buildmate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildmatePageRoutingModule
  ],
  declarations: [BuildmatePage]
})
export class BuildmatePageModule {}
