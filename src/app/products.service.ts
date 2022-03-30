import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./store/product-item.model";

@Injectable (
    {providedIn:'root'}
)
export class ProductsService {
    private baseUrl:string = "https://pacsun-app-default-rtdb.firebaseio.com/";
    private productsEndpoint:string = "products.json";

    constructor(private db: AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<ProductItemModel>("products").valueChanges();
        
    }

    getProduct(index:number){
    }

    public addProduct(product:ProductItemModel){
        this.db.list<ProductItemModel>("products").push(product);
    }
}