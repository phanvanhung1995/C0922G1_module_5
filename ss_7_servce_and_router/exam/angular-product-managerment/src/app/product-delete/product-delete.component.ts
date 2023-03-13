import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productDelete: Product;
  formProduct: FormGroup

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      this.productDelete = this.productService.findById(id);
    })
    this.formProduct = new FormGroup({
      id: new FormControl(this.productDelete.id),
      name: new FormControl(this.productDelete.name),
      price: new FormControl(this.productDelete.price),
      description: new FormControl(this.productDelete.description)
    })
  }

  deleteProduct() {
    const productDelete = this.formProduct.value
    this.productService.deleteProduct(productDelete);
    this.router.navigateByUrl('/list')
  }
}
