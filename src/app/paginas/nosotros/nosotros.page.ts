import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderGlobalComponent, FooterGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NosotrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
