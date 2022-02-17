import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeLayoutComponent } from "./home-layout.component";
import { OrdersLayoutComponent } from "./orders-layout.component";
import { ReferalLayoutComponent } from "./referal-layout.component";
import { StoresLayoutComponent } from "./stores-layout.component";
import { SwimTrunksLayoutComponent } from "./swim-trunks-layout.component";


const routes:Routes = [
    {path: "", component: HomeLayoutComponent},
    {path: "swim-trunks", component: SwimTrunksLayoutComponent},
    {path: "home", component: HomeLayoutComponent},
    {path: "referal", component: ReferalLayoutComponent},
    {path: "stores", component: StoresLayoutComponent},
    {path: "order-locator", component: OrdersLayoutComponent}
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