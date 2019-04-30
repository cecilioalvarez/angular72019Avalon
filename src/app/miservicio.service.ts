import { Injectable } from '@angular/core';
import { Libro } from './negocio/libro';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  lista:Libro[]=[];


  constructor() { 

    this.lista.push(new Libro("java2","pedro",200));
    this.lista.push(new Libro("net2","maria",300));
    this.lista.push(new Libro("javascript2","ana",500));

  }

  public buscarTodos():Libro[] {

    return this.lista;
  }

  public insertar(libro:Libro):void {

    this.lista.push(libro);
  }

  public borrar(libro:Libro):void {

    var indice=this.lista.indexOf(libro);
    this.lista.splice(indice,1);
  }

}
