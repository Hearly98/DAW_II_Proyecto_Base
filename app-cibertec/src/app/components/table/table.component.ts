import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() datas: Producto[] = []
  @Input() titles: any[] = []
  @Input() desactivarProducto!: (id: number) => void;
  constructor() { }

  ngOnInit(): void {

  }



}
