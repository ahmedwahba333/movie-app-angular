import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: Movie = {
    "createdAt": "",
    "name": '',
    "image": '',
    "rate": 0,
    "count": 0,
    "description": '',
    "price": 0,
    "reviews":[],
    "id": 0
  }


}
