import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  allFavouriteMovies: any = [];
  favourites: any = [];
  emailId:any;
  searchItem:any;
  searchmovie:any;
  searchedMovies: any=[];
  allSearchedMovies: any=[];
  isReady = false;
  allMovies: any = []
  currentPg:number=1;

  constructor(private movieService: MovieService,private router:Router) {  }
  ngOnInit(): void {
    this.emailId=localStorage.getItem('emailId')
    this.getFavouriteMovies();
    console.log(this.favourites);
  }
  getFavouriteMovies() {
    this.movieService.getFavouriteMoviesByEmail().subscribe(res => {
      this.allFavouriteMovies = res;
      this.allFavouriteMovies.forEach((s: any) => {
        this.movieService.getAllFavouriteMoviesFromApi(+s.movieId).subscribe((response) => {
          this.favourites.push(response);
        });
      })
    });
  }
  movieDetails(data: any) {
    this.movieService.selectedMovie(data);
  }
  deleteMovie(data:any) {
    this.movieService.deleteFavouriteFromMovieService(data.id,this.emailId).subscribe(res=>{
      console.log("deleting in movie service ");  
      console.log(res);
      
    })
    window.location.reload()    
  }

 
  

}
