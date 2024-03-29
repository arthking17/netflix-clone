import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private MovieDBService: MovieApiServiceService) { }

  bannerMovies: any = [];
  trendingMovies: any = [];
  movieGenres: any = [];
  moviesByGenre: any[][] = [[],[]];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();

    this.listAllMoviesByGenre();
  }

  //bannerData
  bannerData() {
    this.MovieDBService.bannerApiData().subscribe((result) => {
      // console.log(result, 'bannerMovies#');
      this.bannerMovies = result.results;

    })
  }

  trendingData() {
    this.MovieDBService.trendingMovieApiData().subscribe((result) => {
      // console.log(result, 'trendingMovies#');
      this.trendingMovies = result.results;
    })
  }

  listMovieGenres() {
    this.MovieDBService.getListGenreMovies().subscribe((result) => {
      // console.log(result, 'listMovieGenres#');
      this.movieGenres = result.genres;
    })
  }

  listMoviesByGenre(genreMovie: any) {
    return this.MovieDBService.getListMoviesByGenre(genreMovie).subscribe((result) => {
      // console.log(result, 'listMoviesByGenre#');
      this.moviesByGenre = result.results;
    })
  }

  listAllMoviesByGenre() {
    this.MovieDBService.getListGenreMovies().subscribe((result) => {
      // console.log(result, 'listMovieGenres#');

      this.movieGenres = result.genres;

      this.movieGenres.forEach((genre: any) => {

        this.MovieDBService.getListMoviesByGenre(genre.id).subscribe((result) => {

          // console.log(result, `${genre.name}#`);
          this.moviesByGenre[genre.id] = result.results;
        })
      });
    })
  }

}
