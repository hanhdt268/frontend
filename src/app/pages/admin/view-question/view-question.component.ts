import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  qId: any;
  qTitle: any;

  questions: any;

  constructor(private _route: ActivatedRoute, private _question: QuestionService, private _snack: MatSnackBar) {
  }

  ngOnInit(): void {

    // @ts-ignore
    this.qId = this._route.snapshot.params.qid;
    // @ts-ignore
    this.qTitle = this._route.snapshot.params.title;
    this._question.getQuestionOfQuiz(this.qId).subscribe({
      next: (data: any) => {
        console.log(data)
        this.questions = data
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

  deleteQuestion(qId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure delete ?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._question.deleteQuestion(qId).subscribe({
          next: (data: any) => {
            this._snack.open('Question Deleted', '', {
              duration: 3000
            });
            this.questions = this.questions.filter((q: any) => q.quesId != qId)
          },
          error: (err) => {
            this._snack.open('Error in deleting Question', '', {
              duration: 3000
            })
            console.log(err)
          }
        })
      }

    })
  }

}
