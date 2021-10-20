import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { PersonagensComponentComponent } from './personagens-component/personagens-component.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
  { path: 'planetas', component: PlanetasComponent},
  { path: 'personagens', component: PersonagensComponentComponent},
  { path: 'detalhes', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


