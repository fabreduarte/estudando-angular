import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];
  service: FilmService

  constructor(service: FilmService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((films: Film[]) => {
      this.films = films;
    })
  }
}
