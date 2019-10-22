import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoComponent } from './catalogo.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CatalogoService } from '../../service/catalogo.service'


const routesMock=[
  {path:'catalogo', component:CatalogoComponent},
  ];
describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoComponent, NavbarComponent
         ],
      imports:[
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes(routesMock)
      ],
      providers:[
        CatalogoService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to method crearPedido when this form isnot empty',()=>{
    component.formCrearPedido.controls["nombreProducto"].setValue('Huawei p10')
    component.formCrearPedido.controls["cantidad"].setValue('2')
    component.formCrearPedido.controls["nombre"].setValue('Omar Martinez')
    component.formCrearPedido.controls["fechaNacimiento"].setValue('27 Junio 1995')
    component.formCrearPedido.controls["direccionEnvio"].setValue('Calle 10')
    component.formCrearPedido.controls["ciudad"].setValue('Medellin')
    expect(component.formCrearPedido.valid).toBeTruthy();
  })

  it('should call to method cancelar',()=>{
    component.cancelar();
    expect(component.mostrarForm).toBeFalsy();
  })
});
