import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-yo',
  templateUrl: './usuario-yo.page.html',
  styleUrls: ['./usuario-yo.page.scss'],
})
export class UsuarioYoPage implements OnInit {
  email = "";
  password = "";
  nombre: string = '';
  telefono: string = '';
  token: string = '';
  archivoImagen: File | null = null;
  profileImage: string | ArrayBuffer | null = null; 
  crearUser: any;
  Router: any;
  alertcontroller: any;

  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit() {}

  async registrar() {
    const usuario=await this.firebase.registrar(this.email,this.password);
    const token = await usuario.user?.getIdToken();
    if (this.archivoImagen){
      const request= await this.crearUser.agregarUsuario(
        {
          p_nombre:this.nombre,
          email:this.email,
          p_telefono: this.telefono,
          token: token
        },
        this.archivoImagen
      );
    }console.log(usuario);
    this.Router.navigateByUrl("login")
  }

  selectImage() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result; 
      };
      reader.readAsDataURL(file);
    }
  }
  async resAlert(){
    const alert= await this.alertcontroller.create({
      header:'Registrado',
      message:"Usuario registrado",
      buttons:['OK']
    })
    await alert.present(); 
    }
    onFileChange(event: any) {

      if (event.target.files.length > 0) {
    
       this.archivoImagen = event.target.files[0];
    
      }
    
     }
}
