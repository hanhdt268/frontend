import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {UserService} from "../../services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  id: any = 0;
  user: any;

  constructor(private _route: Router, private _login: LoginService, private _user: UserService) {
  }

  ngOnInit(): void {
    this.user = this._login.getUser();
  }

  updateUser() {
    this._user.updateUser(this.user).subscribe({
      next: (data: any) => {
        Swal.fire('Successfully', "Quiz updated", 'success').then((e) => {
          this._route.navigate(['/admin/profile'])
        })
      },
      error: (error) => {
        Swal.fire('Error', "Profile updated", 'error')
        console.log(error)
      }
    })
  }
}
