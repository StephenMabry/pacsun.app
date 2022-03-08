import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./store/product-item.model";

@Injectable (
    {providedIn:'root'}
)
export class ProductsService {
    private baseUrl:string = "https://pacsun-app-default-rtdb.firebaseio.com/";
    private productsEndpoint:string = "products.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndpoint);
        
    }

    getProduct(index:number){
        return this.http.get<ProductItemModel []>(this.getProducts + 'products/ + ' + index + '.json');
    }
}