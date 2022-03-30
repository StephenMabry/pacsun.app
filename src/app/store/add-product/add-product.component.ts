import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ProductItemModel } from '../product-item.model';

@Component({
  selector: 'ps-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(product: ProductItemModel){
    console.log("You pressed add product");
    console.log(product);
    this.ps.addProduct(product);
  }

}
