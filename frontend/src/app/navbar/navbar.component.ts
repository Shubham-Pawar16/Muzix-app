import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../models/models/user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser?: User;
  profilePicture?:string;
  isLogIn:any = this.service.isLoginSuccess;  // logout

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private service:LoginService,private route:Router,private snackbar:MatSnackBar) {}

  logout(){
    this.service.removeToken();
    window.location.reload;
    this.snackbar.open("Logged out successfully!");
    this.route.navigate(['/home'])
    
  }

  ngOnInit(){
    if (this.isLogIn == true) {
      console.log("user by email");
    }
  }
}
