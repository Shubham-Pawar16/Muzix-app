package com.example.MovieService.Services;

import com.example.MovieService.Domain.FavouriteMovie;
import com.example.MovieService.Exception.MovieAlreadyExistsException;
import com.example.MovieService.Exception.MovieNotFoundException;
import com.example.MovieService.Repository.FavouriteMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavouriteMovieServiceImpl implements FavouriteMovieService{
    FavouriteMovieRepository favouriteMovieRepository;
    @Autowired
    public FavouriteMovieServiceImpl(FavouriteMovieRepository favouriteMovieRepository) {
        this.favouriteMovieRepository = favouriteMovieRepository;
    }

    @Override
    public FavouriteMovie addMovie(FavouriteMovie favouriteMovie) throws MovieAlreadyExistsException {

        return favouriteMovie;
    }
//    @Override
//    public FavouriteMovie registerFavourite(FavouriteMovie favouriteMovie) throws MovieAlreadyExistsException {
//        FavouriteDTO favouriteDTO=new FavouriteDTO();
//        favouriteDTO.setMovieId(favouriteMovie.getMovieId());
//        favouriteDTO.setMovieName(favouriteMovie.getMovieName());
//        favouriteDTO.setEmail(favouriteMovie.getEmail());
//        if(favouriteMovieRepository.findById(favouriteMovie.getMovieId()).isPresent() )
//        {
//            favMovie=getFavouriteMovieByMovieId(favouriteMovie.getMovieId());
//            if(favouriteMovie.getEmail().equals(favMovie.get().getEmail()))
//            {
//                throw new MovieAlreadyExistsException();
//            }
//            else
//            {
//                favouriteMovieRepository.save(favouriteMovie);
//                System.out.println("saved user in mongo");
//                producer.sendMessageToRabbitMq(favouriteDTO);
//            }
//
//        }
//        else{
//            favouriteMovieRepository.save(favouriteMovie);
//            System.out.println("saved user in mongo");
//            producer.sendMessageToRabbitMq(favouriteDTO);
//        }
//        return favouriteMovie;
//    }

    @Override
    public FavouriteMovie deleteMovie(int movieId, String email) throws MovieNotFoundException {
        return null;
    }

}
