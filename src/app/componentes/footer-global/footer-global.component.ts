import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterGlobalComponent  implements OnInit {

  constructor(
    private router: Router
) { }

  ngOnInit() {}


  irhorarios(){
    this.router.navigate(['/horarios']);
  }
    irnosotros(){
    this.router.navigate(['/nosotros']);
  }
    irpreguntas(){
    this.router.navigate(['/preguntas']);
  }
}
