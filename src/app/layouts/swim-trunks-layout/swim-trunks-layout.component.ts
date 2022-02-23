import { Component } from "@angular/core";
import { mock_product_list } from "../../store/mock_product_list";
import { ProductItemModel } from "../../store/product-item.model";

@Component({
    selector: 'ps-swim-trunks',
    templateUrl: 'swim-trunks-layout.component.html',
    styleUrls: ['swim-trunks-layout.component.css']
})

export class SwimTrunksLayoutComponent{
    products: ProductItemModel [] = [];

    constructor(){
      for(var product of mock_product_list){
        // console.log(product);
        this.products.push(product);
      }
  
    }
}