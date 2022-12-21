import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  user: any = null;
  constructor(public _login: LoginService) { }

  ngOnInit(): void {
    this.user= this._login.getUser();
  }


}
