import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorwindowsPageRoutingModule } from './doorwindows-routing.module';

import { DoorwindowsPage } from './doorwindows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorwindowsPageRoutingModule
  ],
  declarations: [DoorwindowsPage]
})
export class DoorwindowsPageModule {}
