import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiBaseUrl = environment.apiBaseUrl

  constructor(private _http: HttpClient) {
  }

  //get question

  public getQuestionOfQuiz(qId: any) {
    return this._http.get(`${this.apiBaseUrl}/question/quiz/all/${qId}`)
  }

  //add question

  public addQuestion(question: any) {
    return this._http.post(`${this.apiBaseUrl}/question/`, question)
  }

  //delete question
  public deleteQuestion(quesId: any) {
    return this._http.delete(`${this.apiBaseUrl}/question/${quesId}`)
  }

}
