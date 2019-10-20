import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
export const routes: Routes = [
    {path:'catalogo', component:CatalogoComponent},
    {path:'Pedido',component:PedidosComponent},
    {path:'',pathMatch:'full', redirectTo:'catalogo'},
    { path :'**',pathMatch:'full', redirectTo:'pedido' }
  ];
  
  