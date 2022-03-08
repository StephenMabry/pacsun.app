import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { mock_product_list } from 'src/app/store/mock_product_list';
import { ProductItemModel } from 'src/app/store/product-item.model';
import { sale_product_list } from './sale-product-list';
import { SaleProductModel } from './sale-product.model';

@Component({
  selector: 'ps-sale-layout',
  templateUrl: './sale-layout.component.html',
  styleUrls: ['./sale-layout.component.css']
})
export class SaleLayoutComponent implements OnInit {
  products: SaleProductModel [] = [];

    constructor(private productsService:ProductsService){
  
    }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductItemModel []) =>{
      console.log("fetching data");
      for (var product of data){
        this.products.push(product);
      }

    });
    //throw new Error("method not implemented");
  }

}
