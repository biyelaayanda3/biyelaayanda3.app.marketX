import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromptemailPage } from './promptemail.page';

const routes: Routes = [
  {
    path: '',
    component: PromptemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromptemailPageRoutingModule {}
