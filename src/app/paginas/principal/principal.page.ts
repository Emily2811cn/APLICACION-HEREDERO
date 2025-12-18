import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { MasComponent } from 'src/app/componentes/mas/mas.component';
import { ModalController } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [HttpClientModule, IonContent, CommonModule, FormsModule, HeaderGlobalComponent, FooterGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PRINCIPALPage implements OnInit {

  productos: any[]=[];
  productosfiltrados: any[]=[];
  categorias: any[]=[]

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.http.get('assets/BD/categorias.json')//realiza una peticion get al archivo categorias.json
    .subscribe((data: any) =>{//lee el archivo categorias.json
      this.categorias = data;//almacena las categorias en el array categorias
    });
  }

  cargarProductos(){
    this.http.get('assets/BD/productos.json')//realiza una peticion get al archivo productos.json
    .subscribe((data: any) => {//lee el archivo productos.json
      this.productos = data;//almacena los productos en el array productos
      this.productosfiltrados = [...this.productos];//copia todos los productos al array productosfiltrados
    });
 }

  filtrarPorCategoria(nombre: string){//filtra los productos por subcategoria
    this.productosfiltrados = this.productos.filter(p=> p.subcategoria === nombre);
    //filtra los productos por subcategoria y los almacena en el array productosfiltrados

    console.log("Subcategoria: ", nombre,//muestra la subcategoria por la que se filtro
      "Cantidad de productos: ", this.productosfiltrados.length,//muestra la cantidad de productos que hay en la subcategoria
      "Productos: ", this.productosfiltrados//muestra los productos que hay en la subcategoria
    );

  }

  irvermas(producto: any){
    this.router.navigate(['/vermas'], { queryParams: producto});
  }

    async verimagengrande(producto: any){//muestra la imagen en grande en una ventana emergente
      const modal = await this.modalCtrl.create({
        component : MasComponent,
        componentProps : { imagen: producto.imagen, titulo: producto.titulo, descripcion: producto.descripcion, precio: producto.precio},//lo que va a aparecer en la ventana emergente (imagen y titulo)
        cssClass: ['estilo-modal','modal-grande'] //clase css para darle estilo a la ventana emergente
        
      });
      await modal.present();
    }

    mostrarTodos(){//muestra todos los productos
      this.productosfiltrados = [...this.productos];//copia todos los productos al array productosfiltrados
    }

  onTextoFiltrado(texto: string) {
  if (texto === "") {
    this.productosfiltrados = [...this.productos];
    return;
  }

  this.productosfiltrados = this.productos.filter(
    p =>
      p.titulo.toLowerCase().includes(texto) ||
      p.descripcion.toLowerCase().includes(texto)
  );
}
imagenesCarrusel = [
  'assets/img/carru1.png',
  'assets/img/carru2.png',
  'assets/img/carru3.png'

];

slideOpts = {
  initialSlide: 0,
  speed: 600,
  autoplay: {
    delay: 3000
  },
  loop: true
};
 }