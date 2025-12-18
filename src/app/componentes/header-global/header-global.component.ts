import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonSearchbar } from '@ionic/angular/standalone';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, CommonModule, FormsModule, IonSearchbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderGlobalComponent implements OnInit {

  @Output() textoFiltrado = new EventEmitter<string>(); // 👈 evento hacia el padre

  constructor(private router: Router) {}

  ngOnInit() {}

  irprincipal() {
    this.router.navigate(['/principal']);
  }

  filtrar(event: any) {
    const texto = (event?.target.value || '').toLowerCase().trim();
    this.textoFiltrado.emit(texto); // 👈 enviamos el texto al padre
  }
  irAlCarrito() {
  this.router.navigate(['/carrito']);
}

}
