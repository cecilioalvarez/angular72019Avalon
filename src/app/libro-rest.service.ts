import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Libro } from './negocio/libro';
import { Observable } from 'rxjs';
import { Librodto } from './negocio/librodto';
@Injectable({
  providedIn: 'root'
})
export class LibroRESTService {

  constructor(private http:HttpClient) { }

  // es una peticion ajax
  buscarTodos():Observable<Libro[]> {
   
   //hace uso del objeto http de angular
   // que realiza una peticion get
   //typescript uso de genericos
   //convierte la peticion http en una promesa
   //una promesa en javacsript es un objeto que tendra
   //un valor futuro
   //ese valor futuro se enlazará a traves del metodo then
    return this.http.get<Libro[]>("http://localhost:3000/libros");
  }


  buscarTodosDTO():Observable<Librodto[]> {
   
    //hace uso del objeto http de angular
    // que realiza una peticion get
    //typescript uso de genericos
    //convierte la peticion http en una promesa
    //una promesa en javacsript es un objeto que tendra
    //un valor futuro
    //ese valor futuro se enlazará a traves del metodo then
     return this.http.get<Librodto[]>("http://localhost:3000/libros");
   }

  

  insertar(libro:Libro):Observable<Libro> {

    return this.http.post<Libro>("http://localhost:3000/libros",libro);
  }


  salvar(libro:Libro):Observable<Libro> {

    return this.http.put<Libro>(`http://localhost:3000/libros/${libro.titulo}`,libro);
  }

  borrar(libro:Libro):Observable<Libro> {
    //javascript es6 template strings
    return this.http.delete<Libro>(`http://localhost:3000/libros/${libro.titulo}`);
  }

  buscarUno(titulo:string):Observable<Libro> {
    //javascript es6 template strings
    return this.http.get<Libro>(`http://localhost:3000/libros/${titulo}`);
  }
}
