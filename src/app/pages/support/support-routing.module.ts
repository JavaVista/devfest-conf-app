import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupportPage } from './support';
import { LeavePageGuard } from '../../guards/leave-page.guard';

const routes: Routes = [
  {
    path: '',
    component: SupportPage,
    canDeactivate: [LeavePageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportPageRoutingModule { }
