import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { BottomNavComponent } from './navigation/bottomnav.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { PromotionsCarouselComponent } from './promotions/promotions.carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavComponent,
    PromotionsCarouselComponent,
    CategoryCardComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
