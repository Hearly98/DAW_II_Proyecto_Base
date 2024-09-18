import { Routes, RouterModule } from "@angular/router";
import { ProductosComponent } from "./components/views/productos/productos.component";
import { ProductosFilterComponent } from "./components/views/productos-filter/productos-filter.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    { path: '', component: ProductosComponent},
    { path: 'enable', component: ProductosFilterComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}