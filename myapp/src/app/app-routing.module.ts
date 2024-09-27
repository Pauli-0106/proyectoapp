import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'detalle-viaje',
    loadChildren: () => import('./detalle-viaje/detalle-viaje.module').then( m => m.DetalleViajePageModule)
  },
  {
    path: 'dende-llevo',
    loadChildren: () => import('./dende-llevo/dende-llevo.module').then( m => m.DendeLlevoPageModule)
  },
  {
    path: 'donde-voy',
    loadChildren: () => import('./donde-voy/donde-voy.module').then( m => m.DondeVoyPageModule)
  },
  {
    path: 'ruta-tu',
    loadChildren: () => import('./ruta-tu/ruta-tu.module').then( m => m.RutaTuPageModule)
  },
  {
    path: 'ruta-yo',
    loadChildren: () => import('./ruta-yo/ruta-yo.module').then( m => m.RutaYoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
