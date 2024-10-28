import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']); // Redirige a la ruta de inicio de sesión
  }

}
