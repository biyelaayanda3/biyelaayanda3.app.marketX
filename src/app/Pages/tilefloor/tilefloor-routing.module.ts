import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TilefloorPage } from './tilefloor.page';

const routes: Routes = [
  {
    path: '',
    component: TilefloorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TilefloorPageRoutingModule {}
