import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
interface Producto {
  id: number,
  descripcion: string,
  precio: number,
  cantidad: number,
  enable: string,
}
@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private baseUrl = environment.apiUrl;

  private productos: string = `${this.baseUrl}/productos`

  constructor(
    private http: HttpClient
  ) { }

  listarProductos(): Observable<any> {
    return this.http.get(this.productos)
  }
  obtenerProductoPorId(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.productos}/${id}`);
  }
  crearProducto(data: Producto): Observable<Producto[]>{
    return this.http.post<Producto[]>(`${this.productos}/save`, data);
  }
  actualizarProducto(data: Producto): Observable<Producto[]>{
    return this.http.post<Producto[]>(`${this.productos}/save`, data);
  }
  eliminarProducto(id:number): Observable<Producto[]>{
    return this.http.delete<Producto[]>(`${this.productos}/delete/${id}`);
  }

}
