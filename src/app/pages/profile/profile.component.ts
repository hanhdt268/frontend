import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;
  constructor(private _login: LoginService) { }

  ngOnInit(): void {
    this.user = this._login.getUser();
    // this._login.getCurrentUser().subscribe({
    //   next: (user: any)=> (this.user= user),
    //   error:(err)=> alert(err)
    // })

  }

}
