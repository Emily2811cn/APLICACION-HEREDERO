import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons} from '@ionic/angular/standalone'
@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderGlobalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
