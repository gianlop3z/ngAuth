import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogupFormComponent } from './pages/logup/logup-form.component';

const routes: Routes = [
  {
    path: 'logup',
    component: LogupFormComponent,
    data: { animationType: 'logupForm' }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    data: { animationType: 'loginForm' }
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: { animationType: 'Home' }
  },
  { path: '', redirectTo: 'logup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]})
export class AppRoutingModule {};
