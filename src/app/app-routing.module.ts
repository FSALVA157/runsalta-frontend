import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppLayoutComponent } from './layout/app.layout.component';
//import { AppLayoutModule } from './layout/app.layout.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./layout/app.layout.module').then((m) => m.AppLayoutModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
