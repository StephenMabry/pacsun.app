import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandsLayoutComponent } from "./brands-layout/brands-layout.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { OrdersLayoutComponent } from "./orders-layout/orders-layout.component";
import { ReferalLayoutComponent } from "./referal-layout/referal-layout.component";
import { SaleLayoutComponent } from "./sale-layout/sale-layout.component";
import { StoresLayoutComponent } from "./stores-layout/stores-layout.component";
import { SwimTrunksLayoutComponent } from "./swim-trunks-layout/swim-trunks-layout.component";


const routes:Routes = [
    {path: "", component: HomeLayoutComponent},
    {path: "swim-trunks", component: SwimTrunksLayoutComponent},
    {path: "home", component: HomeLayoutComponent},
    {path: "referal", component: ReferalLayoutComponent},
    {path: "stores", component: StoresLayoutComponent},
    {path: "order-locator", component: OrdersLayoutComponent},
    {path: "sale-page", component: SaleLayoutComponent},
    {path: "brands", component: BrandsLayoutComponent}
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