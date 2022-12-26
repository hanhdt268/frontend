import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  //update
  private apiBaseUrl = environment.apiBaseUrl

  constructor(private _http: HttpClient) {
  }

  public getQuiz() {
    return this._http.get(`${this.apiBaseUrl}/quiz/`)
  }

  public addQuiz(quiz: any) {
    return this._http.post(`${this.apiBaseUrl}/quiz/`, quiz)
  }

  public delete(qId: any) {
    return this._http.delete(`${this.apiBaseUrl}/quiz/${qId}`)
  }

  //get the single qid
  public getQuizzes(qId: any) {
    return this._http.get(`${this.apiBaseUrl}/quiz/${qId}`)
  }

  public updateQuiz(quiz: any) {
    return this._http.put(`${this.apiBaseUrl}/quiz/`, quiz)
  }

  //get quiz of category
  public getQuizzesOfCategory(cId: any) {
    return this._http.get(`${this.apiBaseUrl}/quiz/category/${cId}`)
  }

  //get active quiz
  public getActiveQuizzes() {
    return this._http.get(`${this.apiBaseUrl}/quiz/active`)
  }

  //get active quiz of category
  public getActiveQuizzesOfCategory(cId: any) {
    return this._http.get(`${this.apiBaseUrl}/quiz/category/active/${cId}`)
  }
}
