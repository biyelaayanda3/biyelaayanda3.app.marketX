import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorwindowsPage } from './doorwindows.page';

const routes: Routes = [
  {
    path: '',
    component: DoorwindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorwindowsPageRoutingModule {}
