import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderGlobalComponent, FooterGlobalComponent]
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
    {
      id: 7,
      titulo: "BLUSA DE MUJER TALLA S",
      precio: 10,
      descripcion: "Blusa para verano",
      imagen:"assets/img/blusa1.png"
    },
    {
      id: 8,
      titulo: "BODY DE MUJER TALLA S",
      precio: 10,
      descripcion: "Ideal para verano",
      imagen:"assets/img/blusa2.png"
    },
    {
      id: 9,
      titulo: "BODY DE MUJER TALLA S",
      precio: 10,
      descripcion: "Ideal para verano",
      imagen:"assets/img/blusa3.png"
    },
    {
      id: 10,
      titulo: "BODY DE MUJER TALLA S",
      precio: 12,
      descripcion: "Blusa para verano",
      imagen:"assets/img/blusa4.png"
    },
    {
      id: 11,
      titulo: "BUZO DE HOMBRE TALLA M",
      precio: 25,
      descripcion: "Abrigo de hombre color vino",
      imagen:"assets/img/abrigo2.png"
    },
    {
      id: 12,
      titulo: "BUZO DE HOMBRE TALLA L",
      precio: 25,
      descripcion: "Abrigo de hombre color negro",
      imagen:"assets/img/abrigo3.png"
    },
    {
      id: 13,
      titulo: "BUZO DE HOMBRE TALLA M",
      precio: 25,
      descripcion: "Abrigo de hombre color azul oscuro",
      imagen:"assets/img/abrigo4.png"
    },
    {
      id: 14,
      titulo: "BUZO DE HOMBRE TALLA L",
      precio: 25,
      descripcion: "Abrigo de hombre color verde",
      imagen:"assets/img/abrigo5.png"
    },
    {
      id: 15,
      titulo: "BUZO DE HOMBRE TALLA M",
      precio: 22,
      descripcion: "Abrigo de hombre color gris",
      imagen:"assets/img/abrigo6.png"
    },
    {
      id: 16,
      titulo: "CAMISA DE HOMBRE TALLA M",
      precio: 15,
      descripcion: "Camisa polo en punto ligero color beige",
      imagen:"assets/img/cam6.png"
    },
    {
      id: 17,
      titulo: "CAMISA DE HOMBRE TALLA M, L",
      precio: 17,
      descripcion: "Camisa clasica de playa, color blanca",
      imagen:"assets/img/cam7.png"
    },
    {
      id: 18,
      titulo: "CAMISA DE HOMBRE TALLA M",
      precio: 16,
      descripcion: "Camisa manga corta con botones color negro",
      imagen:"assets/img/cam8.png"
    },
    {
      id: 19,
      titulo: "GORROS PARA INVIERNO",
      precio: 8,
      descripcion: "Gorros para invierno en color negro y naranja",
      imagen:"assets/img/gorro1.png"
    },
    {
      id: 20,
      titulo: "GORROS PARA VERANO",
      precio: 7,
      descripcion: "Gorros para verano color negro",
      imagen:"assets/img/gorro2.png"
    }

  ]

  productosfiltrados = [...this.productos];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irvermas(producto: any){
    this.router.navigate(['/vermas'], { queryParams: producto});
  }

  filtrar(event: any){
    const texto=(event?.target.value || '').toLowerCase().trim();
    if(texto === ""){
      this.productosfiltrados = [...this.productos];
      return;
    }
    this.productosfiltrados=this.productos.filter(
      p=>p.titulo.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto)
    );
  }
}
