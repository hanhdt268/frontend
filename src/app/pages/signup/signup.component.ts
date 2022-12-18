import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone:'',

  }
  constructor(private userService: UserService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if (this.user.username == '' || this.user.username == null){
      this._snack.open('User is required !!', '',{
        duration: 3000
      });
      return;
    }
    this.userService.addUser(this.user).subscribe({
      next: (data)=> {
        Swal.fire('Successfully','user is registered', 'success')
      },
      error: (error)=> {
        Swal.fire('Register Fail', 'username already exists', 'error')
      },
      complete: ()=> console.log("the end")
    })
  }

}
