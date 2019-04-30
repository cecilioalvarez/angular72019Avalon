import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroRESTService } from '../libro-rest.service';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent implements OnInit {

  libroEditar:Libro= new Libro();
  constructor(public route: ActivatedRoute,public servicio:LibroRESTService,public router:Router) {

   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      
      this.servicio.buscarUno(params.get("titulo")).subscribe((libro)=>{

        this.libroEditar=libro;
      })
    })
  }

  salvar() {

    //salvar
    this.servicio.salvar(this.libroEditar).subscribe(()=>{

        this.router.navigate(["listado"]);

    });
  }


}
