import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RooftimberPageRoutingModule } from './rooftimber-routing.module';

import { RooftimberPage } from './rooftimber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RooftimberPageRoutingModule
  ],
  declarations: [RooftimberPage]
})
export class RooftimberPageModule {}
