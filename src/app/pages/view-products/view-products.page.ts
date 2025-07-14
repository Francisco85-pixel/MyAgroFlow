import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './view-products.page.html',
  styleUrls: ['./view-products.page.scss'],
})
export class ViewProductsPage {
  produtos$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const produtosRef = collection(this.firestore, 'produtos');
    this.produtos$ = collectionData(produtosRef, { idField: 'id' });
  }
}
