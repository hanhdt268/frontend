import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import Swal from "sweetalert2";
// @ts-ignore
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  qId: any;
  qTitle: any;
  question = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }

  constructor(private _route: ActivatedRoute, private _question: QuestionService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.qId = this._route.snapshot.params.qid;
    // @ts-ignore
    this.qTitle = this._route.snapshot.params.title;
    // @ts-ignore
    this.question.quiz['qId'] = this.qId;

  }


  addQuestion() {
    this._question.addQuestion(this.question).subscribe({
      next: (data: any) => {
        Swal.fire('Successfully', 'Add question success', "success");
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
        this.question.content = '';

      },
      error: (error) => {
        Swal.fire('Error', 'Add question not success', 'error')
        console.log(error)
      }
    })
  }
}
