import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../app/service/firebase.service'; // Asegúrate de que la ruta al servicio sea correcta

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  email: string | null = '1133@1133.com';

  constructor(private router: Router, private firebaseService: FirebaseService) {}  // Inyecta el servicio aquí

  goToProfile() {
    this.router.navigate(['/profile']); 
  }

  logout() {
    this.firebaseService.logOut().then(() => {  // Usa firebaseService sin errores
      console.log("Usuario ha cerrado sesión");
      this.router.navigate(['/login']);
    }).catch((error: any) => {  // Especifica el tipo 'any' para evitar el error de TypeScript
      console.error("Error al cerrar sesión:", error);
    });
  }
}
