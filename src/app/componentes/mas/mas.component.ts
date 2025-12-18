import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonContent, IonTitle, IonButton, IonHeader} from '@ionic/angular/standalone'
@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, IonTitle, IonButton, IonHeader]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MasComponent  implements OnInit {

  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;


  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  cerrarModal(){
    this.modalCtrl.dismiss();
  }
 agregarAlCarrito() {
  const nuevoProducto = {
    imagen: this.imagen,
    titulo: this.titulo,
    descripcion: this.descripcion,
    precio: this.precio
  };

  let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  carrito.push(nuevoProducto);
  localStorage.setItem('carrito', JSON.stringify(carrito));

  console.log('Carrito actualizado:', carrito); // 👀 para verificar
}



}

