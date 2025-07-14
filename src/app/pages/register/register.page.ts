import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(
    private auth: Auth,
    private alertController: AlertController,
    private router: Router
  ) {}

  async register() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Usuário criado com sucesso!',
        buttons: ['OK'],
      });

      await alert.present();
      await alert.onDidDismiss();

      this.router.navigateByUrl('/dashboard');
    } catch (error: any) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: error.message,
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
