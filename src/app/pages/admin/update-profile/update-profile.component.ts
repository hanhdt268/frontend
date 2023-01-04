import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";
import {UserService} from "../../../services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  id: any;
  user: any;

  constructor(private _route: Router, private _login: LoginService, private _user: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.snapshot.params.Id;
    console.log(this.id)
    this.user = this._login.getUser();
  }

  // public updateUser() {
  //   this._login.generateToken(this.user).subscribe({
  //     next: (data: any) => {
  //       console.log("success");
  //       console.log(data)
  //       this._login.loginUser(data.token);
  //       //login...
  //       this._user.updateUser(this.user).subscribe({
  //         next: (data: any) => {
  //           Swal.fire('Successfully', "Quiz updated", 'success').then((e) => {
  //             this._route.navigate(['/admin/profile'])
  //           })
  //         },
  //         error: (error) => {
  //           Swal.fire('Error', "Profile updated", 'error')
  //           console.log(error)
  //         }
  //       })
  //
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //     complete: () => {
  //       console.log("the end")
  //     }
  //   })
  // }

  updateUser() {
    this._user.updateUser(this.user).subscribe({
      next: (data: any) => {
        Swal.fire('Successfully', "Quiz updated", 'success')
        this._route.navigate(['/admin/profile'])
        this._login.setUser(data);
      },
      error: (error) => {
        Swal.fire('Error', "Profile updated", 'error')
        console.log(error)
      }
    })
    console.log(this.user)
  }
}
