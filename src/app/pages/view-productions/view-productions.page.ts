import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-productions',
  templateUrl: './view-productions.page.html',
  styleUrls: ['./view-productions.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ViewProductionsPage {
  producoes$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const producoesRef = collection(this.firestore, 'producoes');
    this.producoes$ = collectionData(producoesRef, { idField: 'id' });
  }
}
