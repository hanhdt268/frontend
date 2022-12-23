import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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
    phone: '',

  }

  constructor(private userService: UserService, private _snack: MatSnackBar, private _router: Router) {
  }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.user.username == '' || this.user.username == null) {
      this._snack.open('User is required !!', '', {
        duration: 3000
      });
      return;
    }
    this.userService.addUser(this.user).subscribe({
      next: (data) => {
        Swal.fire('Successfully', 'user is registered', 'success')
        this._router.navigate(['user-dashboard'])
      },
      error: (error) => {
        this._snack.open('user already exists !!', '', {
          duration: 3000
        });

      },
      complete: () => console.log("the end")
    })
  }

}
