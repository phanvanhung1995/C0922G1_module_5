import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  product: Product;
  categories: Category[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.findById(this.id).subscribe(item => {
        this.product = item;
      })
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        category: new FormControl(),
      });
      this.getCategories()
    });
  }

  ngOnInit() {
  }

  updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(this.product.id, product).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl("/product/list")
    });

  }

  getCategories() {
    return this.categoryService.getAll().subscribe(item => {
      this.categories = item
    })
  }
}
