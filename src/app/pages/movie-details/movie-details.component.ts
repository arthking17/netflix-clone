import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieDBService: MovieApiServiceService, private router: ActivatedRoute) {}
  movieDetails: any;
  movieVideo: any;
  movieCast: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'movie_id#');

    this.getMovieDetails(getParamId);    
    this.getMovieVideos(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovieDetails(id:any) {
    this.movieDBService.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getMovieDetails#');
      this.movieDetails = result;
    })
  }

  getMovieVideos(id:any) {
    this.movieDBService.getMovieVideos(id).subscribe((result) => {
      console.log(result, 'getMovieVideos#');
      result.results.forEach((element:any) => {
        if(element.type == "Trailer") {
          this.movieVideo = element.key;
          console.log(this.movieVideo, 'getMovieVideoKey#');
        }
      });
    })
  }

  getMovieCast(id:any) {
    this.movieDBService.getMovieCredits(id).subscribe((result) => {
      console.log(result, 'getMovieCredits#');
      this.movieCast = result.cast;
    })
  }
}
