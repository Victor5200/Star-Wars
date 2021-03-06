import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

import { HttpClientModule } from '@angular/common/http';
import { PessoasComponent } from './pessoas/pessoas.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetasComponent,
    DetalhesComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
