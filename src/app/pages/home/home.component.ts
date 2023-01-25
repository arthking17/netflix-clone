import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private MovieDBService: MovieApiServiceService) {}

  bannerMovies: any = [];
  trendingMovies: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  //bannerData
  bannerData() {
    this.MovieDBService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerMovies#');
      this.bannerMovies = result.results;
      
    })
  }

  trendingData() {
    this.MovieDBService.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingMovies#');
      this.trendingMovies = result.results;
    })
  }

}
