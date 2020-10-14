import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from './../interfaces/movie';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { viewClassName } from '@angular/compiler';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movie: Movie = {
    name: null,
    year: null,
    description: null,
    duration: null,
    genre: null
  };
  id: any;//mas
  editing: boolean = false;
   movies: Movie[];
  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
      this.moviesService.get().subscribe((data: Movie[]) => {
        this.movies = data;
        this.movie = this.movies.find((m) => { return m.id == this.id });
        console.log(this.movie);
      }, (error) => {
        console.log(error);
      });
    }else{
      this.editing = false;
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  saveMovie() {

    if (this.editing){
      this.moviesService.put(this.movie).subscribe((data) => {
        alert('Producto actualizada');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un Error');
      });
    }else{
      this.moviesService.save(this.movie).subscribe((data) => {
        alert('Producto guardada');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un Error');
      });
    }

  }

}
