import { Component, OnInit } from '@angular/core';
import { LibroRESTService } from 'src/app/libro-rest.service';
import { Librodto } from '../librodto';

@Component({
  selector: 'app-listadodto',
  templateUrl: './listadodto.component.html',
  styleUrls: ['./listadodto.component.css']
})
export class ListadodtoComponent implements OnInit {
  //una lista de elementos
  // que es una interface
  lista:Librodto[];
  constructor(public servicio: LibroRESTService) { }

  ngOnInit() {

   this.servicio.buscarTodosDTO().subscribe((datos)=>{

        this.lista=datos;
    })
  }

}
