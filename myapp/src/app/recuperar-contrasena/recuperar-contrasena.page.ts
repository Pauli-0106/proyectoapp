import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {
  email = "";
  password = "";

  constructor(private firebase: FirebaseService, private router: Router) {} // Corrección del tipo de servicio y de router

  navigateToLogin() {
    this.router.navigate(['/login']); // Redirige a la ruta de inicio de sesión
  }

  async recuperar() {
    try {
      const usuario = await this.firebase.recuperar(this.email); // Corregí la llamada y cerré el paréntesis
      console.log(usuario);
      this.router.navigateByUrl('/login'); // Redirige a la ruta de inicio de sesión
    } catch (error) {
      console.error("Error al recuperar contraseña:", error);
    }
  }
}
