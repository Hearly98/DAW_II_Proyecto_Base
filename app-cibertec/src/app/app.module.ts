import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/views/productos/productos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosFilterComponent } from './components/views/productos-filter/productos-filter.component';
import { TableComponent } from './components/table/table.component';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductosFilterComponent,
    TableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
