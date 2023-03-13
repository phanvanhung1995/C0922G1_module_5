import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  id: number;
  productEditForm: FormGroup;
  productEdit: Product;


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productEdit = this.productService.findById(this.id);
      this.productEditForm = new FormGroup({
        id: new FormControl(this.productEdit.id),
        name: new FormControl(this.productEdit.name),
        price: new FormControl(this.productEdit.price),
        description: new FormControl(this.productEdit.description)
      });
    })

  }

  onEdit() {
    this.productService.updateById(this.id, this.productEditForm.value)
    this.route.navigateByUrl("/list")
  }
}
