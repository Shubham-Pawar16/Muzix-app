package com.example.UserAuthentication.Services;

import com.example.UserAuthentication.Domain.User;
import com.example.UserAuthentication.Exception.UserAlreadyExistException;
import com.example.UserAuthentication.Exception.UserNotFoundException;
import org.springframework.stereotype.Service;


public interface IUserService {
    public abstract User addUser(User user) throws UserAlreadyExistException;
    public abstract User loginCheck(String email, String password) throws UserNotFoundException;
    public User fetchUserByEmailAndPassword (String email,String password);
}
