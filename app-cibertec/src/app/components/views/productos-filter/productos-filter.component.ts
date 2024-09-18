import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos-filter',
  templateUrl: './productos-filter.component.html',
  styleUrls: ['./productos-filter.component.css']
})
export class ProductosFilterComponent implements OnInit {
  titles = [
    {name:"N°"},
    {name: "Descripción"},
    {name: "Cantidad"},
    {name: "Disponible"},
    {name: "Precio"},
    {name: "Acción"}
  ]
  listaProductos: any[] = []
  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this.getProductsByEnable()
  }

  getProductsByEnable():void {
    this._productoService.obtenerProductoPorEnable()
    .subscribe((data: any)=>{
      this.listaProductos = data.productos;
      if(this.listaProductos.length == 0){
        console.log("No hay datos")
      }
    })
  }
  desactivarPorId(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto desactivará el producto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, desactivarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productoService.desactivarProductoPorId(id).subscribe(
          (response) => {
            Swal.fire('Desactivado!', 'El producto ha sido desactivado.', 'success');
            this.getProductsByEnable(); 
          },
          (error) => {
            Swal.fire('Error', 'Error al desactivar el Producto.', 'error');
          }
        );
      }
    });
  }
}
