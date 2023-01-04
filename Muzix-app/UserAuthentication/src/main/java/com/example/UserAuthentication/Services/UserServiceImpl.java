package com.example.UserAuthentication.Services;

import com.example.UserAuthentication.Domain.User;
import com.example.UserAuthentication.Exception.UserAlreadyExistException;
import com.example.UserAuthentication.Exception.UserNotFoundException;
import com.example.UserAuthentication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService{
    UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) throws UserAlreadyExistException {
        if (userRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExistException();
        }
        else {
            return userRepository.save(user);
        }
    }

    @Override
    public User loginCheck(String email, String password) throws UserNotFoundException {
        User user=userRepository.findByEmailAndPassword(email,password);
            if (user!=null)
            {
                return user;
            }
            else {
                throw new UserNotFoundException();
            }
    }

    @Override
    public User fetchUserByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
