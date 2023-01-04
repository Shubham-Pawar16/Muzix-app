package com.example.MovieService.Services;

import com.example.MovieService.Domain.User;
import com.example.MovieService.Exception.UserAlreadyExistsException;
import com.example.MovieService.Exception.UserNotFoundException;

import java.util.Optional;

public interface UserMovieService {
    User registerUser(User user) throws UserAlreadyExistsException;
    Optional<User> getUserByEmail(String email) throws UserNotFoundException;


}
