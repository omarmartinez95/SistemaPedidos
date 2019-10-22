import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

// servicios
import { CatalogoService } from '../../src/app/service/catalogo.service';
import { TableFilterPipe } from './table-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogoComponent,
    PedidosComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( routes, { useHash: true} )
  ],
  providers: [
    CatalogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
