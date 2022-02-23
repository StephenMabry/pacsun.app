import { Component, OnInit } from '@angular/core';
import { sale_product_list } from './sale-product-list';
import { SaleProductModel } from './sale-product.model';

@Component({
  selector: 'ps-sale-layout',
  templateUrl: './sale-layout.component.html',
  styleUrls: ['./sale-layout.component.css']
})
export class SaleLayoutComponent implements OnInit {
  products: SaleProductModel [] = [];

    constructor(){
      for(var product of sale_product_list){
        // console.log(product);
        this.products.push(product);
      }
  
    }

  ngOnInit(): void {
  }

}
