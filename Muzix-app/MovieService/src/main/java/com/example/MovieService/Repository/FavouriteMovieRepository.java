package com.example.MovieService.Repository;
import com.example.MovieService.Domain.FavouriteMovie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FavouriteMovieRepository extends MongoRepository<FavouriteMovie, Integer> {
    FavouriteMovie findByMovieId(int movieId);
    boolean deleteByMovieIdAndEmail(int movieId,String email);
    FavouriteMovie findByEmail(String email);
}
