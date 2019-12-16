import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargadaInfo = false;

  constructor( private http: HttpClient ) {
    // console.log ('Servicio de Info página cargada');
    // Leer el Archivo JSON
    this.http.get('assets/data/data-pagina.json')
    // Subscribe recibe una respuesta
    .subscribe( (resp: infoPagina) => {

      this.cargadaInfo = true;
      this.info = resp;
      // Con esto muestro toda la información que estoy pasando por el .json y lo convierto en un JavaScript
      console.log (resp);
      // Con esto puedo mostrar solo la propiedad "twitter" de lo que me está devolviendo mi resp
      // console.log (resp ['twitter']);
    });
  }
}
