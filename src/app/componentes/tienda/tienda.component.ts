import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonList, IonItem, IonThumbnail, IonLabel,
  IonButton, IonIcon, IonImg
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonThumbnail, IonLabel,
    IonButton, IonIcon, IonImg
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TiendaComponent implements OnInit {

  productos: any[] = [];

  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    const data = localStorage.getItem('tienda');
    this.productos = data ? JSON.parse(data) : [];
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  eliminarProducto(i: number) {
    this.productos.splice(i, 1);
    localStorage.setItem('tienda', JSON.stringify(this.productos));
  }

  sumarCantidad(i: number) {
    this.productos[i].cantidad++;
    localStorage.setItem('tienda', JSON.stringify(this.productos));
  }

  restarCantidad(i: number) {
    if (this.productos[i].cantidad > 1) {
      this.productos[i].cantidad--;
      localStorage.setItem('tienda', JSON.stringify(this.productos));
    }
  }

  calcularTotal(): number {
    return this.productos.reduce((t, p) => t + p.precio * p.cantidad, 0);
  }

  irprincipal() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/principal']);
  }
}
