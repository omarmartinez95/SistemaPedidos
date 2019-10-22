import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../service/catalogo.service';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listaCatalogo:any=[];
  mostrarForm:boolean=false;
  formCrearPedido:FormGroup;
  selectedFiles: FileList;
  nombreProducto:any;
  cantidadProducto:any;

  arrayPedidos:any=[];

  imagenGrande:any;
  formulaTamanoArchivo:any;

  constructor(public catalogoService:CatalogoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listCatalogo();
    this.crearPedido();
  }

  listCatalogo(){
    this.catalogoService.listarCatalogo().subscribe((response)=>{
      this.listaCatalogo = response;
    })
  }

  crearPedido(){
    this.formCrearPedido = this.formBuilder.group({
      nombreProducto:[this.nombreProducto],
      cantidad:['',Validators.required],
      nombre:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required]],
      direccionEnvio:['',[Validators.required]],
      ciudad:['',Validators.required],
    })
  }

  mostrarFormularioPedir(producto){
    this.formCrearPedido.controls["nombreProducto"].setValue(producto.descripcion);
    this.cantidadProducto = producto.cantidadDisponible;
    this.mostrarForm = true;
  }

  abrirImagenModal(producto){
    this.imagenGrande = producto.imagen;
    $('#modalImagen').modal('show');
  }

  abrirExploradorArchivos(){
    let tag:any = document.getElementById('getFile');
    if(tag.value){
      tag.value = "";
    }
    tag.click();
  }

  obtenerDocumento(documento){
    var extensiones_permitidas = new Array(".pdf");
    this.selectedFiles = documento.target.files;
    var nombreCargado = documento.target.files[0].name;
    var extension = (nombreCargado.substring(nombreCargado.lastIndexOf("."))).toLowerCase();
    var existeExtension = extensiones_permitidas.find(response=>response == extension);
    if(existeExtension){
      this.formulaTamanoArchivo = this.selectedFiles[0].size/(1024*1024);
      if(this.formulaTamanoArchivo >1){
        alert('No es posible cargar el archivo, supera el tamaño (1MB).')
      }else{
        alert('El archivo se cargo exitosamente.')
      }
    }
  }

  confirmar(nuevoPedido){
    if(nuevoPedido.cantidad > this.cantidadProducto){
      alert('No se puede realizar el pedido, porque la cantidad excede a la del stock')
    }else{
      this.arrayPedidos.push(nuevoPedido);
      sessionStorage.pedidosNuevos = JSON.stringify(this.arrayPedidos);
      alert('Pedido generado exitosamente.')
      this.formCrearPedido.reset();
    }
  }

  cancelar(){
    this.mostrarForm = false;
    this.formCrearPedido.reset();
  }

}
