import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { LibroRESTService } from '../libro-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  libroNuevo: Libro = new Libro();
  constructor(public servicio: LibroRESTService ,  public router: Router) { }

  ngOnInit() {
  }


  nuevo() {
    this.servicio.insertar(this.libroNuevo).subscribe((libro)=>{
     console.log("has insertado");
     this.router.navigate(["listado"]);
    });
    
  }

}
