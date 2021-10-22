import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PessoasComponent } from "./pessoas/pessoas.component";

const routes: Routes = [
  { path: 'planetas', component: PlanetasComponent},
  { path: 'detalhes', component: DetalhesComponent},
  { path: 'personagens', component: PessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


