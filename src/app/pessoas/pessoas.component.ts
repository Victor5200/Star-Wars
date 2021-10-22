import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Personagens, RetornePersonagens} from "../models/personagens.model";

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {
   personagens: Personagens[];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<RetornePersonagens>('https://swapi.dev/api/people/')
      .subscribe(resultado => {
        this.personagens = resultado.results;
      });
  }

}

