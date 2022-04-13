import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./store/add-product/add-product.component";
import { BrandsLayoutComponent } from "./layouts/brands-layout/brands-layout.component";
import { HomeLayoutComponent } from "./layouts/home-layout/home-layout.component";
import { OrdersLayoutComponent } from "./layouts/orders-layout/orders-layout.component";
import { ReferalLayoutComponent } from "./layouts/referal-layout/referal-layout.component";
import { SaleLayoutComponent } from "./layouts/sale-layout/sale-layout.component";
import { StoresLayoutComponent } from "./layouts/stores-layout/stores-layout.component";
import { SwimTrunksLayoutComponent } from "./layouts/swim-trunks-layout/swim-trunks-layout.component";
import { AuthenticationComponent } from "./auth/authentication/authentication.component";


const routes:Routes = [
    {path: "", component: HomeLayoutComponent},
    {path: "swim-trunks", component: SwimTrunksLayoutComponent},
    {path: "home", component: HomeLayoutComponent},
    {path: "referal", component: ReferalLayoutComponent},
    {path: "stores", component: StoresLayoutComponent},
    {path: "order-locator", component: OrdersLayoutComponent},
    {path: "sale-page", component: SaleLayoutComponent},
    {path: "brands", component: BrandsLayoutComponent},
    {path: "admin", component: AddProductComponent},
    {path: "auth", component: AuthenticationComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}