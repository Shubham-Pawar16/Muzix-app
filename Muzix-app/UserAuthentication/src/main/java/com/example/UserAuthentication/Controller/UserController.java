package com.example.UserAuthentication.Controller;

import com.example.UserAuthentication.Domain.User;
import com.example.UserAuthentication.Exception.UserAlreadyExistException;
import com.example.UserAuthentication.Services.IUserService;
import com.example.UserAuthentication.Services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {
    IUserService iUserService;
    @Autowired
    public UserController(IUserService iUserService) {
        this.iUserService = iUserService;
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistException
    {
        return new ResponseEntity<>(iUserService.addUser(user), HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public User logincheck(@RequestBody User user) throws Exception
    {
        String tempEmailId = user.getEmail();
        String tempPassword = user.getPassword();
        User user1 = null;
        if(tempEmailId != null && tempPassword != null){
            user1 = iUserService.fetchUserByEmailAndPassword(tempEmailId,tempPassword);
        }
        if(user1.getEmail() == null && user1.getPassword() == null){
            throw new Exception("Wrong Credentials!");
        }
        return user1;
    }


}
