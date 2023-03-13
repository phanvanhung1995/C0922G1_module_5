import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  products: Product[] = [
    {id: 1, name: 'iphone 5', price: 10, description: 'gold'},
    {id: 2, name: 'iphone 6', price: 100, description: 'red'},
    {id: 3, name: 'iphone 7', price: 1000, description: 'black'}
  ];

  getAll(): Product[] {
    return this.products
  }

  findById(id: number) {
    debugger
    return this.products.find(item => item.id === id)
  }

  save(product: Product) {
    return this.products.push(product)
  }

  updateById(id: number, productEdit) {
    this.products = this.products.map(item => {
        return item.id === id ? productEdit : item
      }
    )
  }

  deleteProduct(idDelete: number) {
    this.products.filter(item => item.id!==idDelete)
  }
}
