import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Planeta, RetornoListaPlanetas} from "../models/planetas.model";


@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {

  planetas: Planeta[]




  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<RetornoListaPlanetas>('https://swapi.dev/api/planets')
      .subscribe(resultado => {
        this.planetas = resultado.results;
      });
  }


}
