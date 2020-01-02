import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosBusqueda: Producto[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();

   }

  private cargarProductos(){
    return new Promise ((resolve, reject) => {
      this.http.get('https://portafolio-angular-9394.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        // console.log (resp);
        this.productos = resp;
        this.cargando = false;
        resolve();
        // setTimeout(() => {
        //   this.cargando = false;
        //   }, 250);
      });
    });
  }

  getProducto ( id: string ){
    return this.http.get(`https://portafolio-angular-9394.firebaseio.com/productos/${ id }.json`);
  }
  buscarProducto ( termino: string){
    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecurtar después de tener los productos
        // aplicar filtro
        this.filtrarProductos (termino);
      });
    } else {
      // aplicar filtro
      this.filtrarProductos (termino);
    }
    // this.productosBusqueda = this.productos.filter( producto => {
    //   return true;
    // });
    // console.log (this.productosBusqueda);
  }

  private filtrarProductos(termino: string) {
    // console.log (this.productos);
    this.productosBusqueda = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productosBusqueda.push(prod);
      }
    });
  }




}
 