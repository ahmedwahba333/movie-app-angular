import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: Movie = {
    adult: true,
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    vote_average: 0,
    vote_count: 0
  }

  constructor(private router:Router){}

  redirct() {
    this.router.navigate(['/movie-details',this.movie.id]);
  }

}
