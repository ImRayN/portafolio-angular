import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { productoDescripcion } from 'src/app/interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  producto: productoDescripcion;
  idProducto: string;

  constructor( private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      // console.log (parametros['cod']);
      this.productosService.getProducto(parametros['cod'])
      .subscribe ((producto : productoDescripcion) => {
        this.idProducto = parametros['cod'];
        this.producto = producto;
        console.log (producto);
      });

    } )
  }

}
