import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Importa los componentes de Ionic que realmente usas en el HTML
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonText, 
  IonIcon, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
    IonIcon,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  message: string | null = null;

  showMessage() {
    this.message = '¡FELICIDADES! Haz creado tu primera app con Ionic.';
  }
}
