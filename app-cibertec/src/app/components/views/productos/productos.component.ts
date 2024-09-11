import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProductos : any[] = []

  constructor(
    private _productoService : ProductosService
  ) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this._productoService.listarProductos()
    .subscribe((data) => {
      this.listaProductos = data.productos;
      console.log(data.productos)
      if(this.listaProductos.length == 0){
        console.log("No hay datos")
      }
    });
  }

}
