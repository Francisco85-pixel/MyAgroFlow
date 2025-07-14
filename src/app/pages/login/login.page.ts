import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private auth: Auth
  ) {}

  async login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Login feito com sucesso!',
        buttons: ['OK'],
      });

      await alert.present();
      await alert.onDidDismiss();

      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Falha no login. Verifique o email e senha.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
