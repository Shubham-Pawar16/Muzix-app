package com.example.MovieService.Services;

import com.example.MovieService.Domain.User;
import com.example.MovieService.Exception.UserAlreadyExistsException;
import com.example.MovieService.Exception.UserNotFoundException;
import com.example.MovieService.Repository.UserMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class UserMovieServiceImpl implements UserMovieService{
    private UserMovieRepository userMovieRepository;
    @Autowired
    public UserMovieServiceImpl(UserMovieRepository userMovieRepository) {
        this.userMovieRepository = userMovieRepository;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
//        if (userMovieRepository.findById(user.getEmail()).isPresent())
//        {
//            throw new UserAlreadyExistsException();
//        }
        return user;
    }

    @Override
    public Optional<User> getUserByEmail(String email) throws UserNotFoundException {
        return Optional.empty();
    }
}
