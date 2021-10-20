import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Planetas } from '../models/planetas.model';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Planetas[]>('https://swapi.dev/api/planets')
      .subscribe(resultado => console.log(resultado));
  }


}
