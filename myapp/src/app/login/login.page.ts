import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../service/service-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = "";
  password = "";
  tokenID:any="";

  constructor(private firebase: FirebaseService, private router: Router, private alertcontroler: AlertController,private storage:StorageService) {}

  ngOnInit() {}

  async login() {
    try {
      let usuario = await this.firebase.auth(this.email, this.password);
      this.tokenID=await usuario.user?.getIdToken();
      console.log(usuario);
      console.log("token",await usuario.user?.getIdToken());
      const navigationExtras:NavigationExtras = {
        queryParams:{email : this.email}
      };
      this.pruebaStorage();
      this.router.navigate(['/home'],navigationExtras);
    } catch (error) {
      console.error(error);
      this.popAlert();
    }
  }
  async pruebaStorage(){
    const jsonToken:any=[
      {
        "token":this.tokenID
      },
      {
        "email":this.email
      }
    ];
    this.storage.agregarStorage(jsonToken);
    console.log(await this.storage.obtenerStorage());
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

