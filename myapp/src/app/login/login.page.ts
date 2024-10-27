import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = "";
  password = "";

  constructor(private firebase: FirebaseService, private router: Router) {}

  ngOnInit() {}

  async login() {
    try {
      let usuario = await this.firebase.auth(this.email, this.password);
      console.log(usuario);
      this.router.navigateByUrl("home");
    } catch (error) {
      console.error(error);
    }
  }
}
