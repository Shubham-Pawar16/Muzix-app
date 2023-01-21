import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';
import { User } from '../models/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  userObject = new User();
  image?: File
  wantToUpdate: boolean = false;
  currentUser?: User;
  isFileValid?: boolean;
  profilePicture?:string;
  

  
  addressForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required,Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    password: ['', [Validators.required,Validators.minLength(4), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/)]],
    gender: [null, Validators.required],
    phoneNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(13),Validators.pattern('^[0-9]*$')]],
  });

  constructor(private fb: FormBuilder, private login:LoginService, private route:Router,private snackbar: MatSnackBar) {}
  formdata=new FormData;

  get username() { return this.addressForm.get("username") }
  get email() { return this.addressForm.get("email") }
  get password() { return this.addressForm.get("password"); }
  get gender() { return this.addressForm.get("gender") }
  get phoneNumber() { return this.addressForm.get("phoneNumber"); }

  imgupload(event:any){
    let file:any= event.target.files[0];
    console.log(file);
    this.formdata.append("file",file);
  }

  onSubmit(): void {
    // this.login.storeData(this.userObject).subscribe({
    //   next(x:any)
    //   {alert("Registered Successfully")},
    //   error(errormsg:any){},
    //   complete(){alert("completed")}
    // }),this.route.navigate(["/login"])
    this.formdata.append("user",JSON.stringify(this.addressForm.value))
    this.login.storeData(this.formdata).subscribe(data=>{
      console.log(data);
    });
    this.route.navigate(['/login'])
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

  // updateImage(event: any) {
  //   this.image = event.target.files![0];
  //   this.isFileValid = this.image?.size! <= 1024000;
  //   if (!this.isFileValid) this.snackbar.open("File is too big!", "Close", {duration: 3000});
  // }

  

  // url:string = "../../assets/profilepic.jpg"

  // uploadProfile(file:any){
  //   if(file.target.files){
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url = event.target.result;
  //     }
  //   }
  //   const filedata = file.target.files[0];
  //   console.log(filedata)
  //   console.log(file);
  // }

}
