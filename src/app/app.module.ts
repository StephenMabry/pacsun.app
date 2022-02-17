import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { ReferalLayoutComponent } from './layouts/referal-layout.component';
import { StoresLayoutComponent } from './layouts/stores-layout.component';
import { SwimTrunksLayoutComponent } from './layouts/swim-trunks-layout.component';
import { BottomNavComponent } from './navigation/bottomnav.component';
import { HeaderCardComponent } from './navigation/headercard.card.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { PromotionsCarouselComponent } from './promotions/promotions.carousel.component';
import { AppRoutingModule } from './layouts/app-routing.module';
import { VerticalCardComponent } from './store/vertical.card.component';
import { OrdersLayoutComponent } from './layouts/orders-layout.component';


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
    OrdersLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
