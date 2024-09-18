import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  listaProductos : any[] = []
  nuevoId: number = 0;
  nuevoDescripcion: string = '';
  nuevoPrecio: number = 0;
  nuevoCantidad: number = 0;
  nuevoEnable: string = '';
  submitted = false
  actualizadoId: number = 0;
  actualizadoDescripcion: string = '';
  actualizadoPrecio: number = 0;
  actualizadoCantidad: number = 0;
  actualizadoEnable: string = '';
  mensajeDeError: string | null = null;
  isOpenModal = false;
  constructor(
    private _productoService : ProductosService
  ) { }
  abrirModal(){
    this.isOpenModal=true;
  }
  cerrarModal(){
    this.isOpenModal=false;
  }
  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    this._productoService.listarProductos()
    .subscribe((data:any) => {
      this.listaProductos = data.productos;
      console.log(data)
      if(this.listaProductos.length == 0){
        console.log("No hay datos")
      }
    });
  }

  agregarProducto():void{
    if (!this.nuevoDescripcion || !this.nuevoPrecio || !this.nuevoCantidad || !this.nuevoEnable) {
      this.mensajeDeError = "Por favor, complete todos los campos.";
      Swal.fire('Error', this.mensajeDeError, 'error');
      return;
    }
    const data = {
      id: 0,
      descripcion: this.nuevoDescripcion,
      precio: this.nuevoPrecio,
      cantidad: this.nuevoCantidad,
      enable: this.nuevoEnable,
    };
    this._productoService.crearProducto(data).subscribe(
      (response) => {
        this.submitted = true;
        Swal.fire('Producto Agregado', 'El producto ha sido agregado con éxito', 'success');
        this.obtenerProductos();
        this.limpiarFormulario();
      },
      (error) => {
        this.mensajeDeError = 'Error al registrar un Producto';
        Swal.fire('Error', this.mensajeDeError, 'error');
      }
    );
  }
  limpiarFormulario() {
    this.nuevoDescripcion = '';
    this.nuevoPrecio = 0;
    this.nuevoCantidad = 0;
    this.nuevoEnable = '';
  }
  eliminarProducto(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._productoService.eliminarProducto(id).subscribe(
          (response) => {
            Swal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success');
            this.obtenerProductos();
          },
          (error) => {
            this.mensajeDeError = 'Error al eliminar el Producto.';
            Swal.fire('Error', this.mensajeDeError, 'error');
          }
        );
      }
    });
  }
}