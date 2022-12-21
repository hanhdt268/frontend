import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("mainContainer") element: ElementRef | undefined;

  user: any = null;

  users: any = {
    phone: '',
    email: '',
    firstName: '',
    lastName: '',
    profile: '',
  }

  constructor(private _login: LoginService, private _user: UserService) {
  }

  ngOnInit(): void {
    this.user = this._login.getUser();
    // this._login.getCurrentUser().subscribe({
    //   next: (user: any)=> (this.user= user),
    //   error:(err)=> alert(err)
    // })

  }


  // onOpenModal(mode: string) {
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode == 'edit') {
  //     this.users = this.user;
  //     button.setAttribute('data-target', '#updateEmployeeModal');
  //   }
  //   // @ts-ignore
  //   this.element.nativeElement.appendChild(button);
  //   button.click();
  // }

  // onUpdateEmployee(user: any) {
  //   this._user.updateUser(user).subscribe({
  //     next: (data) => (console.log("success")),
  //     error: (error) => (console.log("fail"))
  //   })
  // }
  // formSubmit() {
  //   this._user.updateUser(this.users).subscribe({
  //     next: (data: any) => {
  //       Swal.fire('Success', '', 'success')
  //     },
  //     error: (error) => {
  //       console.log(error)
  //     }
  //   })
  // }
}

