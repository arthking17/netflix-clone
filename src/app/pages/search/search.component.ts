import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchResults: any

  constructor (private serviceMovieApi: MovieApiServiceService) {}

  ngOnInit(): void {
      
  }

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm() {
    console.log(this.searchForm.value, 'searchForm#');
    this.serviceMovieApi.searchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result);
      this.searchResults = result.results
    })
  }
}
