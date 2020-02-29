import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';



const routes: Routes = [
  {
    path:"", component: HomePageComponent
  },
  {
    path:"Blog", component: BlogPageComponent
  },
  {
    path:"Travels", component: TravelPageComponent
  },{
    path:"Contact us", component: TravelPageComponent
  },
  {
    path:"Cart", component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
