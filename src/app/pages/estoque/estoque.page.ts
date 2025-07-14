import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class EstoquePage {
  produto: string = '';
  quantidade: number | null = null;
  tipo: string = 'entrada';

  estoque: any[] = [];

  constructor(
    private alertController: AlertController,
    private firestore: Firestore
  ) {
    this.carregarEstoque();
  }

  async registrarMovimentacao() {
    if (!this.produto || !this.quantidade || !this.tipo) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Preencha todos os campos!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const movimentacao = {
      produto: this.produto,
      quantidade: this.tipo === 'saida' ? -this.quantidade : this.quantidade,
      tipo: this.tipo,
      data: new Date(),
    };

    try {
      const estoqueRef = collection(this.firestore, 'estoque');
      await addDoc(estoqueRef, movimentacao);

      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Movimentação registrada!',
        buttons: ['OK'],
      });
      await alert.present();

      this.produto = '';
      this.quantidade = null;
      this.tipo = 'entrada';

      this.carregarEstoque();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Erro ao salvar. Tente novamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async carregarEstoque() {
    const estoqueRef = collection(this.firestore, 'estoque');
    const snapshot = await getDocs(estoqueRef);

    const dados: Record<string, number> = {};

    snapshot.forEach((doc) => {
      const mov = doc.data() as any;
      if (!dados[mov.produto]) {
        dados[mov.produto] = 0;
      }
      dados[mov.produto] += mov.quantidade;
    });

    this.estoque = Object.entries(dados).map(([produto, quantidade]) => ({
      produto,
      quantidade,
    }));
  }
}
