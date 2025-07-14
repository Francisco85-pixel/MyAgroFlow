import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Auth, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-produtor',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './perfil-produtor.page.html',
  styleUrls: ['./perfil-produtor.page.scss'],
})
export class PerfilProdutorPage {
  usuario$: Observable<any>;

  constructor(
    private auth: Auth,
    private router: Router,
    private alertController: AlertController
  ) {
    this.usuario$ = user(this.auth);
  }

  async logout() {
    const confirm = await this.alertController.create({
      header: 'Sair',
      message: 'Tem certeza que deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: async () => {
            await signOut(this.auth);
            this.router.navigateByUrl('/login');
          },
        },
      ],
    });

    await confirm.present();
  }
}
