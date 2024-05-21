import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ControlBoardComponent } from './control-board/control-board.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'control-board', component: ControlBoardComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
