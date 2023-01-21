import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../models/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user =new User()

  constructor(private login:LoginService,private route:Router, private fb:FormBuilder ) { }
  profileForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  get email() { return this.profileForm.get("email") }
  get password() { return this.profileForm.get("password"); }

  onSubmit(){
    this.login.setEmail(this.profileForm.value.email)
    this.login.loginFunction(this.user).subscribe(
      data => 
      {
       localStorage.setItem("token",data.token)
       this.login.storeToken(data.token)
       console.log(this.email)
       console.log(data.token)
        
       // alert("Login Successful!");
        this.route.navigate(["/home"])
    },
      error => {
        window.alert("Login Failed! Please Enter the correct Credentials!")
        console.log("exception occured")
      }
    )
  }

}
