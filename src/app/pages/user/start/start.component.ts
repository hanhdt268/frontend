import {Component, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qId: any
  questions: any

  constructor(private _locationSt: LocationStrategy, private _route: ActivatedRoute, private _question: QuestionService) {
  }

  ngOnInit(): void {
    this.preventBackButton();
    // @ts-ignore
    this.qId = this._route.snapshot.params.qId;
    this.loadQuestion();
  }

  preventBackButton() {
    // @ts-ignore
    history.pushState(null, null, location.href)
    this._locationSt.onPopState(() => {
      // @ts-ignore
      history.pushState(null, null, location.href)
    })
  }

  private loadQuestion() {
    this._question.getQuestionOfQuizForTest(this.qId).subscribe({
      next: (data: any) => {
        this.questions = data
      },
      error: (error) => {
        console.log(error)
        Swal.fire('Error', 'Error in loading question of quiz', 'error')
      }
    })
  }
}
