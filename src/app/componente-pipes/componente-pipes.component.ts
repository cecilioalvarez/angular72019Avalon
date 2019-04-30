import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-componente-pipes',
  templateUrl: './componente-pipes.component.html',
  styleUrls: ['./componente-pipes.component.css']
})
export class ComponentePipesComponent implements OnInit {

  fecha:Date= new Date();
  mensaje:string="Hola";
  lista:Libro[]=[];
  importe:number=500;
  constructor() { 

    this.lista.push(new Libro("java","pedro",200));
    this.lista.push(new Libro("net","juan",500));
    

  }

  ngOnInit() {
  }

}
