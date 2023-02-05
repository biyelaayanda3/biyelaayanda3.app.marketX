import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildmatePage } from './buildmate.page';

const routes: Routes = [
  {
    path: '',
    component: BuildmatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildmatePageRoutingModule {}
