import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email : string = "";  
  constructor(private firebaseService: FirebaseService, private router: Router, private Activate: ActivatedRoute) {
    this.Activate.queryParams.subscribe(params => {
      this.email = params['email'] || "No email";
      console.log('Email recibido en HomePage:', this.email);
    })
  }
  goToProfile() {
    this.router.navigate(['/profile']); // Ajusta esta ruta según la configuración de tu aplicación
  }
  logout() {
    this.firebaseService.logOut().then(() => {
      console.log("Usuario ha cerrado sesión");
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error("Error al cerrar sesión:", error);
    });
  }
}
