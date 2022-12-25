import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  categories: any;

  constructor(private _category: CategoryService, private _snack: MatSnackBar) {
  }

  ngOnInit(): void {
    this._category.categories().subscribe({
      next: (data: any) => {
        this.categories = data;
      }, error: (error) => {
        this._snack.open('Error loading database', '', {
          duration: 3000
        })
        console.log(error)
      }
    })
  }

}
