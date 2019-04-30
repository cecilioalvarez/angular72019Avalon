import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule} from "@angular/common/http";
import { FormularioComponent } from './formulario/formulario.component';
import { Routes, RouterModule } from '@angular/router';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';

const rutas: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario-editar/:titulo', component: FormularioEditarComponent },
 { path: '',   redirectTo: '/listado', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioComponent,
    FormularioEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing: true } // <-- tareas de debug
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
