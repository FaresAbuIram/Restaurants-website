import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllcustomerComponent } from './pages/allcustomer/allcustomer.component';
import { AllorderComponent } from './pages/allorder/allorder.component';
import { BasiccontentComponent } from './pages/basiccontent/basiccontent.component';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';
import { AddEditMenuComponent } from './pages/menus/add-edit-menu/add-edit-menu.component';
import { MenuComponent } from './pages/menus/menu/menu.component';
import { AddEditOrderComponent } from './pages/orders/add-edit-order/add-edit-order.component';
import { OrderComponent } from './pages/orders/order/order.component';
import { EditProfileComponent } from './pages/profiles/edit-profile/edit-profile.component';
import { ProfileComponent } from './pages/profiles/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestaurantsRateAddEditComponent } from './pages/RestaurantRate/restaurants-rate-add-edit/restaurants-rate-add-edit.component';
import { RestaurantsRateComponent } from './pages/RestaurantRate/restaurants-rate/restaurants-rate.component';
import { AddEditComponent } from './pages/restaurants/add-edit/add-edit.component';
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';


const routes: Routes = [
  {
    path: '', component: BasiccontentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RestaurantComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'menus/:id', component: MenuComponent },
      { path: 'menus/add-edit/:id/:resId', component: AddEditMenuComponent },
      { path: 'restaurants/add-edit/:id', component: AddEditComponent },
      { path: 'orders/add-edit/:id', component: AddEditOrderComponent },
      { path: 'restaurantrate', component: RestaurantsRateComponent },
      { path: 'restaurantrate/add-edit/:id', component: RestaurantsRateAddEditComponent },
      { path: 'map', component: MapComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/edit', component: EditProfileComponent },
      {
        path: 'allorder', component: AllorderComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'ROLE_ADMIN'
        }
      },
      {
        path: 'allcustomer', component: AllcustomerComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'ROLE_ADMIN'
        }
      },

    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
