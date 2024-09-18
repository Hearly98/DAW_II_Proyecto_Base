import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private baseUrl = environment.apiUrl;

  private productos: string = `${this.baseUrl}/productos`

  constructor(
    private http: HttpClient
  ) { }

  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.productos}/`)
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
  obtenerProductoPorEnable(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.productos}/enable`);
  }
  desactivarProductoPorId(id: number): Observable<Producto>{
    const body = {enable:false}
    return this.http.put<Producto>(`${this.productos}/enable/${id}`, body);
  }
}
