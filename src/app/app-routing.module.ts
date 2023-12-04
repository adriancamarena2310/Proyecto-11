import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/isAunteticated.guard';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-suthenticated.guard';

const routes: Routes = [
  {
  path:'auth',
  //guards
  canActivate:[isNotAuthenticatedGuard],
  loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
},{
  path: 'dashboard',
//guards
  canActivate:[isAuthenticatedGuard],
  loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
},
{
  path: '**',
  redirectTo: 'auth'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
