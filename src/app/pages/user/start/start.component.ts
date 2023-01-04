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
  qId: any;

  question: any

  markGot = 0;
  correctAnswer = 0;
  attempt = 0;
  isSubmit = false;
  timer: any;

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

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: "info"
    }).then((e) => {
      if (e.isConfirmed) {
        //calculation
        this.evalQuiz();
      }
    })
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000)
  }

  getFormattedTimer() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    //call to server to check questions
    this._question.evalQuiz(this.question).subscribe({
      next: (data: any) => {
        this.markGot = parseFloat(Number(data.markGot).toFixed(2));
        this.correctAnswer = data.correctAnswer;
        this.attempt = data.attempt;
        this.isSubmit = true;
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    })
    // this.isSubmit = true;
    // this.questions.forEach((item: any) => {
    //   if (item.givenAnswer == item.answer) {
    //     this.correctAnswer++;
    //     let markSingle = this.questions[0].quiz.maxMarks / this.questions.length;
    //     this.markGot += markSingle;
    //     this.markGot = Math.floor(this.markGot);
    //   }
    //   if (item.givenAnswer.trim() != 0) {
    //     this.attempt++
    //   }
    // });
    // console.log("CorrectAnswer" + this.correctAnswer);
    // console.log("MarkGot" + this.markGot);
    // console.log("Attempt" + this.attempt);
    // console.log(this.questions);

  }

  printPage() {
    window.print();
  }

  private loadQuestion() {
    this._question.getQuestionOfQuizForTest(this.qId).subscribe({
      next: (data: any) => {
        this.question = data;
        this.timer = this.question.length * 2 * 60;
        // this.questions.forEach((item: any) => {
        //   item['givenAnswer'] = '';
        // })
        this.startTimer();
        console.log(data)
        console.log(this.question)
      },
      error: (error) => {
        console.log(error)
        Swal.fire('Error', 'Error in loading question of quiz', 'error')
      }
    })
  }
}
