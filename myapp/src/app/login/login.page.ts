import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = "";
  password = "";

  constructor(private firebase: FirebaseService, private router: Router, private alertcontroler: AlertController) {}

  ngOnInit() {}

  async login() {
    try {
      let usuario = await this.firebase.auth(this.email, this.password);
      console.log(usuario);
      const navigationExtras:NavigationExtras = {
        queryParams:{email : this.email}
      };
      this.router.navigate(['/home'],navigationExtras);
    } catch (error) {
      console.error(error);
      this.popAlert();
    }
  }
  async popAlert(){
    const Alert=await this.alertcontroler.create({
      header:'Error',
      message: 'Usuario o contraseña incorrecta',
      buttons: ['OK']
      })
    await Alert.present();
  }      
  }

