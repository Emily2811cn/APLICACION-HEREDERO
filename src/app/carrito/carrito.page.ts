import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from '../componentes/header-global/header-global.component';
import { FooterGlobalComponent } from '../componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderGlobalComponent, FooterGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class CarritoPage implements OnInit {

  carrito: any[] = [];

  constructor() {}

ngOnInit() {
  this.cargarCarrito();
}

ionViewWillEnter() {
  // 👀 cada vez que entres a la página, recarga el carrito
  this.cargarCarrito();
}

cargarCarrito() {
  const data = localStorage.getItem('carrito');
  this.carrito = data ? JSON.parse(data) : [];
}


  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  calcularTotal(): number {
    return this.carrito.reduce((acc, prod) => acc + prod.precio, 0);
  }

}
