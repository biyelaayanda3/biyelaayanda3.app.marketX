import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RooftimberPage } from './rooftimber.page';

const routes: Routes = [
  {
    path: '',
    component: RooftimberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RooftimberPageRoutingModule {}
