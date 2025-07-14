// src/app/pages/publicar-produto/publicar-produto.page.ts
import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-publicar-produto',
  templateUrl: './publicar-produto.page.html',
  styleUrls: ['./publicar-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PublicarProdutoPage {
  titulo: string = '';
  descricao: string = '';
  preco: number | null = null;

  constructor(
    private alertController: AlertController,
    private firestore: Firestore
  ) {}

  async publicar() {
    if (!this.titulo || !this.descricao || this.preco == null) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const produto = {
      titulo: this.titulo,
      descricao: this.descricao,
      preco: this.preco,
      criadoEm: new Date(),
    };

    try {
      const produtosRef = collection(this.firestore, 'produtos');
      await addDoc(produtosRef, produto);

      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Produto publicado com sucesso!',
        buttons: ['OK'],
      });
      await alert.present();

      this.titulo = '';
      this.descricao = '';
      this.preco = null;
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Erro ao publicar o produto. Tente novamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
