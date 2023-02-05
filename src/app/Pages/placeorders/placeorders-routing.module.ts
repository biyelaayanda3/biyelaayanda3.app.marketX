import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceordersPage } from './placeorders.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceordersPageRoutingModule {}
