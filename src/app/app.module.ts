import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HomeComponent} from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {authInterceptorProvides} from "./services/auth.interceptor";
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {UserDashboardComponent} from './pages/user/user-dashboard/user-dashboard.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {SidebarComponent} from './pages/admin/sidebar/sidebar.component';
import {WelcomeComponent} from './pages/admin/welcome/welcome.component';
import {ViewCategoriesComponent} from './pages/admin/view-categories/view-categories.component';
import {AddCategoryComponent} from './pages/admin/add-category/add-category.component';
import {ViewQuizzesComponent} from './pages/admin/view-quizzes/view-quizzes.component';
import {AddQuizComponent} from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {UpdateQuizComponent} from './pages/admin/update-quiz/update-quiz.component';
import {UpdateProfileComponent} from './pages/admin/update-profile/update-profile.component';
import {ViewQuestionComponent} from './pages/admin/view-question/view-question.component';
import {AddQuestionComponent} from './pages/admin/add-question/add-question.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {SidebarUserComponent} from './pages/user/sidebar-user/sidebar-user.component';
import {LoadQuizComponent} from './pages/user/load-quiz/load-quiz.component';
import {InstructionsComponent} from './pages/user/instructions/instructions.component';
import {StartComponent} from './pages/user/start/start.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";
import {PasswordQuizComponent} from './pages/user/password-quiz/password-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    UpdateProfileComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    SidebarUserComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    PasswordQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    })
  ],
  providers: [authInterceptorProvides],
  bootstrap: [AppComponent]
})
export class AppModule {
}
