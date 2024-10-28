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


  constructor(private firebase:FirebaseService, private router:Router) { }

  ngOnInit() {
}
async registrar() {
    let usuario = await this.firebase.registrar(this.email, this.password);
    console.log(usuario);
    this.router.navigateByUrl("login");
}
}