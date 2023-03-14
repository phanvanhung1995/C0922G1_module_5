import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.findById(this.id).subscribe(item => {
        this.product = item;
      });
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        category: new FormControl(),
      });

    });
  }

  ngOnInit() {
    this.product = {
      id : null,
      name : '',
      price : null,
      description : '',
      category : null
    }
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      alert('xóa thành công')
      this.router.navigateByUrl('/product/list')
    })
  }
}
