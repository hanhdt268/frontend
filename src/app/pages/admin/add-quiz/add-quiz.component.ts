import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories: any = []

  QuizData: any =
    {
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestion: '',
      active: true,
      category: {
        cId: '',
      }
    }


  constructor(private _category: CategoryService, private _snack: MatSnackBar, private _quiz: QuizService) {
  }

  ngOnInit(): void {

    this._category.categories().subscribe({
      next: (data: any) => {
        this.categories = data;
        console.log(data)
      },
      error: (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in loading data from serve', 'error')
      }
    })
  }

  addSubmit() {
    if (this.QuizData.title.trim() == '' || this.QuizData.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000
      });
      return;
    }
    this._quiz.addQuiz(this.QuizData).subscribe({
      next: (data: any) => {
        Swal.fire('Successfully', 'Add Quiz Successfully', "success")
        this.QuizData =
          {
            title: '',
            description: '',
            maxMarks: '',
            numberOfQuestion: '',
            active: true,
            category: {
              cId: '',
            }
          }
      },
      error: (error) => {
        Swal.fire('Error', '', "error");
        console.log(error)
      }
    })
  }
}
