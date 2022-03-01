import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ReferalLayoutComponent } from './layouts/referal-layout/referal-layout.component';
import { StoresLayoutComponent } from './layouts/stores-layout/stores-layout.component';
import { SwimTrunksLayoutComponent } from './layouts/swim-trunks-layout/swim-trunks-layout.component';
import { BottomNavComponent } from './navigation/bottomnav.component';
import { HeaderCardComponent } from './navigation/headercard.card.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { PromotionsCarouselComponent } from './promotions/promotions.carousel.component';
import { AppRoutingModule } from './layouts/app-routing.module';
import { VerticalCardComponent } from './store/vertical.card.component';
import { OrdersLayoutComponent } from './layouts/orders-layout/orders-layout.component';
import { SaleHeadercardComponent } from './layouts/sale-layout/sale-headercard/sale-headercard.component';
import { SaleLayoutComponent } from './layouts/sale-layout/sale-layout.component';
import { SaleSidebarComponent } from './layouts/sale-layout/sale-sidebar/sale-sidebar.component';
import { BrandsLayoutComponent } from './layouts/brands-layout/brands-layout.component';
import { BrandHeadercardComponent } from './layouts/brands-layout/brand-headercard/brand-headercard.component';
import { MenBrandsComponent } from './layouts/brands-layout/men-brands/men-brands.component';
import { WomenBrandsComponent } from './layouts/brands-layout/women-brands/women-brands.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavComponent,
    PromotionsCarouselComponent,
    CategoryCardComponent,
    VerticalCardComponent,
    SwimTrunksLayoutComponent,
    HomeLayoutComponent,
    HeaderCardComponent,
    ReferalLayoutComponent,
    StoresLayoutComponent,
    OrdersLayoutComponent,
    SaleHeadercardComponent,
    SaleLayoutComponent,
    SaleSidebarComponent,
    BrandsLayoutComponent,
    BrandHeadercardComponent,
    MenBrandsComponent,
    WomenBrandsComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
