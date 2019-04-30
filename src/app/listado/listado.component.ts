import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { MiservicioService } from '../miservicio.service';
import { LibroRESTService } from '../libro-rest.service';
import { flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  private _lista: Libro[] = [];
  //propiedad es una propiedad publica
  
 
  filtroTitulo: string;

  //propiedades
  get lista():Libro[] {
   
    if (this.filtroTitulo!=null && this.filtroTitulo!="") {

      return this._lista.filter((item) => {
        return item.titulo.startsWith(this.filtroTitulo);
  
      });
    }else{

      return this._lista;
    }
   
  }

  set lista(lista:Libro[]) {
    this._lista = lista;
  }

  constructor(public servicio: LibroRESTService, public router:Router) {
   
    
    servicio.buscarTodos().subscribe((datos)=> {

      this.lista=datos as Libro[];
    })

  }

  public editar(libro:Libro):void {

    //el paso de un parametro
    this.router.navigate(["formulario-editar",libro.titulo]);

}

  ngOnInit() {
  }



  borrar(libro: Libro) {
    /*
    this.servicio.borrar(libro).subscribe((titulo)=>{

             var borrable= this.lista.filter((e)=>{
                  return e.titulo==titulo;

              })[0];
              var indice=this.lista.indexOf(borrable);
              this.lista.splice(indice,1);
    })
    */
    this.servicio.borrar(libro).pipe(flatMap(()=> {

          return this.servicio.buscarTodos();

    })).subscribe((datos)=> {

      this.lista=datos as Libro[];
    })
  
  }

 

  
  
  

}
