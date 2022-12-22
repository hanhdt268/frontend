import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quizzes: any = []

  constructor(private _quiz: QuizService) {
  }

  ngOnInit(): void {
    this._quiz.getQuiz().subscribe({
      next: (data: any) => {
        console.log(data);
        this.quizzes = data
      },
      error: (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in loading data', 'error')
      }
    })
  }

  deleteQuiz(qId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._quiz.delete(qId).subscribe({
          next: (data: any) => {
            this.quizzes = this.quizzes.filter((quiz: any) => quiz.qId != qId)
            Swal.fire('Successfully', 'Quiz deleted', 'success')
          },
          error: (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error')

          }
        })
      }
    })
  }
}
