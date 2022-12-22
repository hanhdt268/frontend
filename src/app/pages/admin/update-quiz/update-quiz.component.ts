import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {CategoryService} from "../../../services/category.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qId: any = 0;
  quiz: any;
  categories: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _quiz: QuizService, private _category: CategoryService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.qId = this._route.snapshot.params.qid;
    this._quiz.getQuizzes(this.qId).subscribe({
      next: (data: any) => {
        this.quiz = data;
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    });
    this._category.categories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }


  updateQuiz() {
    this._quiz.updateQuiz(this.quiz).subscribe({
      next: (data: any) => {
        Swal.fire('Successfully', "Quiz updated", 'success').then((e) => {
          this._router.navigate(['/admin/quizzes'])
        })
      },
      error: (error) => {
        Swal.fire('Error', 'Error in updating quiz', 'error')
        console.log(error)
      }
    })
  }
}
