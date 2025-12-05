import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderGlobalComponent, FooterGlobalComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreguntasPage implements OnInit {

  preguntas = [
    {
      icono: 'shirt-outline',
      titulo: '¿Las camisas son hechas a mano o producidas en serie?',
      respuesta: 'Cada prenda mantiene detalles artesanales, aunque se producen en pequeñas cantidades para garantizar calidad.'
    },
    {
      icono: 'woman-outline',
      titulo: '¿Cómo sé cuál es mi talla correcta?',
      respuesta: 'Puedes guiarte con nuestra tabla de medidas disponible en la sección de catálogo.'
    },
    {
      icono: 'car-outline',
      titulo: '¿Cuánto tarda en llegar mi pedido?',
      respuesta: 'Los envíos nacionales tardan entre 3 y 5 días hábiles.'
    },
    {
      icono: 'card-outline',
      titulo: '¿Qué métodos de pago aceptan?',
      respuesta: 'Aceptamos tarjetas de crédito, débito y transferencias bancarias seguras.'
    },
    {
      icono: 'swap-horizontal-outline',
      titulo: '¿Puedo cambiar mi prenda si no me queda bien?',
      respuesta: 'Sí, tienes hasta 15 días para solicitar un cambio de talla.'
    },
    {
      icono: 'thumbs-down-outline',
      titulo: '¿Qué pasa si mi prenda llega dañada?',
      respuesta: 'Te enviamos una nueva sin costo adicional.'
    },
    {
      icono: 'person-outline',
      titulo: '¿Quién diseña las prendas de Heredero Style?',
      respuesta: 'Carlos Ramírez, fundador de la marca, junto con un equipo de diseñadores locales.'
    },
    {
      icono: 'flower-outline',
      titulo: '¿Se pueden personalizar las prendas?',
      respuesta: 'Claro, ofrecemos opciones de personalización en ciertos modelos. '
    },
    {
      icono: 'color-palette-outline',
      titulo: '¿Los diseños son exclusivos?',
      respuesta: 'Sí, cada colección tiene piezas limitadas para mantener la exclusividad y el valor artesanal.'
    },
    {
      icono: 'leaf-outline',
      titulo: '¿Qué materiales utilizan?',
      respuesta: 'Trabajamos con algodón de alta calidad y telas seleccionadas que garantizan comodidad y durabilidad.'
    },
    {
      icono: 'construct-outline',
      titulo: '¿Cómo debo cuidar mi prenda?',
      respuesta: 'Recomendamos lavado a mano o en ciclo delicado, sin secadora, para conservar los detalles artesanales.'
    },
    {
      icono: 'cash-outline',
      titulo: '¿Se pueden hacer compras a plazos?',
      respuesta: 'Sí, ofrecemos pagos en cuotas a través de plataformas como PayPhone y MercadoPago.'
    },
    {
      icono: 'globe-outline',
      titulo: '¿Hacen envíos internacionales?',
      respuesta: 'Sí, enviamos a varios países de Latinoamérica. El costo y tiempo varían según destino.'
    },
    {
      icono: 'people-outline',
      titulo: '¿Cómo apoyan a los artesanos locales?',
      respuesta: 'Colaboramos con talleres independientes y diseñadores ecuatorianos, promoviendo producción ética y local.'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
