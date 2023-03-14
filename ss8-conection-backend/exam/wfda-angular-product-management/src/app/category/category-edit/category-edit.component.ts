import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router : Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(category => {
      const id = +category.get('id')
      console.log(id)
      this.categoryService.findById(id).subscribe(item => {
        this.category = item
      })
    })
    this.categoryForm = new FormGroup({
      name: new FormControl()
    })

    this.category = {
      name: ''
    }
  }

  updateCategory() {
    const category = this.categoryForm.value
    this.categoryService.updateCategory(this.category.id,category).subscribe(() => {
      alert('sửa thành công')
      this.router.navigateByUrl('/category/list')
    })
  }
}
