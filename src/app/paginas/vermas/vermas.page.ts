import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.page.html',
  styleUrls: ['./vermas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, HeaderGlobalComponent, IonButton, FooterGlobalComponent]
})
export class VermasPage implements OnInit {
producto: any={};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.producto = params;
    });
  }
}
