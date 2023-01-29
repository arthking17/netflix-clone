import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  bannerApiData(): Observable<any> {
    return this.http.get
      (`${environment.MovieDBAPIUrl}/trending/all/week?${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }
  
  // trending movies data
  trendingMovieApiData():Observable<any> {
    return this.http.get
    (`${environment.MovieDBAPIUrl}/trending/movie/day?${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }

  searchMovie(data: any):Observable<any> {
    return this.http.get
    (`${environment.MovieDBAPIUrl}/search/movie?query=${data.movieName}&${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }

  getMovieDetails(movieId: any):Observable<any> {
    return this.http.get
    (`${environment.MovieDBAPIUrl}/movie/${movieId}?${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }

  getMovieVideos(movieId: any):Observable<any> {
    return this.http.get
    (`${environment.MovieDBAPIUrl}/movie/${movieId}/videos?${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }

  getMovieCredits(movieId: any):Observable<any> {
    return this.http.get
    (`${environment.MovieDBAPIUrl}/movie/${movieId}/credits?${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }

  getListGenreMovies():Observable<any> {
    return this.http.get
    (`${environment.MovieDBAPIUrl}/genre/movie/list?${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }

  getListMoviesByGenre(movieGenreId: any):Observable<any> {
    return this.http.get
    (`${environment.MovieDBAPIUrl}/discover/movie?with_genres=${movieGenreId}&${environment.MovieDBAPIKeyName}=${environment.MovieDBAPIKeyValue}`);
  }
}
