import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData= {
    username: '',
    password:''
  }
  constructor(private snack: MatSnackBar, private _login: LoginService,private _router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open("Username is required !!", '', {
        duration: 3000
      })
      return;
    }
    if (this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open("Password is required !!", '', {
        duration: 3000
      })
      return;
    }

    //request to server to generate token

    this._login.generateToken(this.loginData).subscribe({
      next: (data: any)=> {
        console.log("success");
        console.log(data)

        //login...
        this._login.loginUser(data.token);

        this._login.getCurrentUser().subscribe({
          next: (user: any)=> {
            this._login.setUser(user);
            console.log(user)
            //admin: admin dashboard
            //normal: normal dashboard
            if (this._login.getUserRole()== 'Admin'){
                this._router.navigate(['admin'])
            }else if (this._login.getUserRole()== 'Normal'){
                this._router.navigate(['user-dashboard'])
            }else {
              this._login.logOut();
            }
          }
        })
      },
      error: (error)=> {
        console.log("error");
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '',{
          duration:3000
        })
      },

      complete: ()=> {
        console.log("the end")}
    })
  }
}
