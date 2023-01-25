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
}
