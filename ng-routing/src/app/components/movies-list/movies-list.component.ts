import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie' ;
import { MoviesService } from '../../service/movies.service' ;


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers : [MoviesService]
})
export class MoviesListComponent implements OnInit {
  movie:Movie[];
  constructor(private MoviesService:MoviesService) { }

  ngOnInit() {
  }

}
