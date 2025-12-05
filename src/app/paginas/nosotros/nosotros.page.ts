import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderGlobalComponent,
    FooterGlobalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NosotrosPage implements OnInit {

  imagenActual: string = 'assets/img/imagen1.png';

  constructor( private router: Router) {}

  ngOnInit() {}

  cambiarImagen(ruta: string) {
    this.imagenActual = ruta;
  }
  irprincipal(){
    this.router.navigate(['/principal']);
  }
}
