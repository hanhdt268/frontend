import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  qId: any
  quiz: any

  constructor(private _route: ActivatedRoute, private _quiz: QuizService, private _routerr: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.qId = this._route.snapshot.params.qId;
    console.log(this.qId)
    this._quiz.getQuizzes(this.qId).subscribe({
      next: (data: any) => {
        this.quiz = data;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  startQuiz() {
    Swal.fire({
      title: 'Do you want to save the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      icon: "info"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._routerr.navigate(['/start/' + this.qId])
      } else if (result.isDenied) {
        Swal.fire('Quiz are not start', '', 'info')
      }
    })
  }
}
