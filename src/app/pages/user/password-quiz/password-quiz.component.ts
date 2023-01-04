import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {QuizService} from "../../../services/quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-password-quiz',
  templateUrl: './password-quiz.component.html',
  styleUrls: ['./password-quiz.component.css']
})
export class PasswordQuizComponent implements OnInit {
  qId: any

  loginData = {
    password: ''
  }

  constructor(private _route: ActivatedRoute, private _snack: MatSnackBar,
              private _quiz: QuizService, private _routerr: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.qId = this._route.snapshot.params.qId;
    console.log(this.qId)

  }

  formSubmit() {
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this._snack.open('Required is password', '', {
        duration: 3000
      })
      return;
    }
    this._quiz.getQuizzes(this.qId).subscribe({
      next: (data: any) => {
        console.log(data);
        if (this.loginData.password == data.password) {
          Swal.fire('Successfully', 'Login', 'success')
          this._routerr.navigate(['/user-dashboard/instructions/' + this.qId])
        } else {
          this._snack.open('Fail', '', {
            duration: 3000
          })
        }

      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
