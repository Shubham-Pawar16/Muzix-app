import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';
import { User } from '../models/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  image?: File
  wantToUpdate: boolean = false;
  currentUser?: User;
  isFileValid?: boolean;
  profilePicture?:string;
  email:any

  constructor(private login:LoginService,private snackbar:MatSnackBar){}
  ngOnInit(): void {
    this.email=localStorage.getItem('emailId')
    this.images()
  }

  // uploadProfilePicture() {
  //   if (this.isFileValid) {
  //     this.login.uploadProfilePicture(this.image!).subscribe({
  //       next: (response: any) => {
  //         this.profilePicture = response['secure_url'];
  //         this.snackbar.open("Profile Image updated successfully!", "Close", {duration: 3000});
  //       }, error: (err) => console.log(err)
  //     });
  //     setTimeout(() => {
  //       this.currentUser!.profilePicture = this.profilePicture!;
  //     }, 3000);
  //   }
  // }

  updateImage(event: any) {
    this.image = event.target.files![0];
    this.isFileValid = this.image?.size! <= 1024000;
    if (!this.isFileValid) this.snackbar.open("File is too big!", "Close", {duration: 3000});
  }
  user:any={};
  images(){
    this.login.getUser(this.email).subscribe(data=>{
      this.user=data
    })
  }

}