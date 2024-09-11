import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

}
