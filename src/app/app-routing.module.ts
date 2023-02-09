import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from "./movie-list/movie-list.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {  } from "./movie-list/movie-list.component";
const routes: Routes = [
  {
    path:"home",
    component: MovieListComponent,
},
{
  path:"About-Us",
  component:AboutUsComponent,
},
{
  path:"Add-Movie",
  component:AddMovieComponent,
},
{
  path:"**",
  component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
