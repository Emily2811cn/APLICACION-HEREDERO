import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PRINCIPALPage implements OnInit {
  productos = [
    {
      id: 1,
      titulo: "CAMISA DE HOMBRE TALLA L",
      precio: 12,
      descripcion: "Camisa de tela algodon",
      imagen: "assets/img/cam1.png"
    },
    {
      id: 2,
      titulo: "CAMISA DE HOMBRE TALLA S",
      precio: 10,
      descripcion: "Camisa de tela algodon",
      imagen: "assets/img/cam2.png"
    },
    {
      id: 3,
      titulo: "CAMISA DE HOMBRE TALLA M",
      precio: 10,
      descripcion: "Camisa de tela algodon",
      imagen: "assets/img/cam3.png"
    },
    {
      id: 4,
      titulo: "CAMISA DE HOMBRE TALLA S",
      precio: 10,
      descripcion: "Camisa de tela algodon",
      imagen: "assets/img/cam4.png"
    },
    {
      id: 5,
      titulo: "CAMISA DE HOMBRE TALLA S",
      precio: 10,
      descripcion: "Camisa de tela algodon",
      imagen: "assets/img/cam5.png"
    },
    {
      id: 6,
      titulo: "CAMISA DE HOMBRE TALLA S",
      precio: 15,
      descripcion: "Camisa de tela algodon",
      imagen:"assets/img/abrigo1.png"
    },

  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto: any){
    this.router.navigate(['/vermas'], { queryParams: producto});
  }

}
