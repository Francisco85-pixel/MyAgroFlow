import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-register-production',
  templateUrl: './register-production.page.html',
  styleUrls: ['./register-production.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // ESSA LINHA É MUITO IMPORTANTE!
})
export class RegisterProductionPage {
  cultura: string = '';
  quantidade: number | null = null;
  data: string = '';

  constructor(
    private alertController: AlertController,
    private firestore: Firestore
  ) {}

  async submitForm() {
    if (!this.cultura || !this.quantidade || !this.data) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const producao = {
      cultura: this.cultura,
      quantidade: this.quantidade,
      data: this.data,
      createdAt: new Date(),
    };

    try {
      const producoesRef = collection(this.firestore, 'producoes');
      await addDoc(producoesRef, producao);

      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Produção registrada com sucesso!',
        buttons: ['OK'],
      });
      await alert.present();

      // Limpar campos
      this.cultura = '';
      this.quantidade = null;
      this.data = '';
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Não foi possível salvar a produção. Tente novamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
