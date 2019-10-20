import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../service/catalogo.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listaCatalogo:any=[];

  constructor(public catalogoService:CatalogoService) { }

  ngOnInit() {
    this.listCatalogo();
  }

  listCatalogo(){
    this.catalogoService.listarCatalogo().subscribe((response)=>{
      debugger;
      this.listaCatalogo = response;
    })
  }

}
