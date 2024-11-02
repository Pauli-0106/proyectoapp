import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard'; 
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionarLogin = () => redirectUnauthorizedTo(['/login'])

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard], 
    data:{authGuardPipe:redireccionarLogin},
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login', // Redirigir a la página de inicio de sesión en lugar de home
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalPageModule),
    canActivate: [AuthGuard] // Protección de la ruta principal
  },
  {
    path: 'actividad',
    loadChildren: () => import('./actividad/actividad.module').then(m => m.ActividadPageModule),
    canActivate: [AuthGuard] // Protección de la ruta actividad
  },
  {
    path: 'detalle-viaje',
    loadChildren: () => import('./detalle-viaje/detalle-viaje.module').then(m => m.DetalleViajePageModule),
    canActivate: [AuthGuard] // Protección de la ruta detalle-viaje
  },
  {
    path: 'dende-llevo',
    loadChildren: () => import('./dende-llevo/dende-llevo.module').then(m => m.DendeLlevoPageModule),
    canActivate: [AuthGuard] // Protección de la ruta dende-llevo
  },
  {
    path: 'donde-voy',
    loadChildren: () => import('./donde-voy/donde-voy.module').then(m => m.DondeVoyPageModule),
    canActivate: [AuthGuard] // Protección de la ruta donde-voy
  },
  {
    path: 'ruta-tu',
    loadChildren: () => import('./ruta-tu/ruta-tu.module').then(m => m.RutaTuPageModule),
    canActivate: [AuthGuard] // Protección de la ruta ruta-tu
  },
  {
    path: 'ruta-yo',
    loadChildren: () => import('./ruta-yo/ruta-yo.module').then(m => m.RutaYoPageModule),
    canActivate: [AuthGuard] // Protección de la ruta ruta-yo
  },
  {
    path: 'tu-usuario',
    loadChildren: () => import('./tu-usuario/tu-usuario.module').then(m => m.TuUsuarioPageModule),
    canActivate: [AuthGuard] // Protección de la ruta tu-usuario
  },
  {
    path: 'usuario-yo',
    loadChildren: () => import('./usuario-yo/usuario-yo.module').then(m => m.UsuarioYoPageModule),
    canActivate: [AuthGuard] // Protección de la ruta usuario-yo
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then(m => m.RecuperarContrasenaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
