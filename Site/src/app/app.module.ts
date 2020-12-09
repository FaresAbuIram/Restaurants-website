import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasiccontentComponent } from './pages/basiccontent/basiccontent.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menus/menu/menu.component';
import { AddEditMenuComponent } from './pages/menus/add-edit-menu/add-edit-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';
import { AddEditComponent } from './pages/restaurants/add-edit/add-edit.component';
import { SearchByNamePipe } from './pipe';
import { AuthGuard } from './auth.guard';
import { OrderComponent } from './pages/orders/order/order.component';
import { AddEditOrderComponent } from './pages/orders/add-edit-order/add-edit-order.component';
import { RestaurantsRateComponent } from './pages/RestaurantRate/restaurants-rate/restaurants-rate.component';
import { RestaurantsRateAddEditComponent } from './pages/RestaurantRate/restaurants-rate-add-edit/restaurants-rate-add-edit.component';
import { EditProfileComponent } from './pages/profiles/edit-profile/edit-profile.component';
import { ProfileComponent } from './pages/profiles/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BasiccontentComponent,
    RegisterComponent,
    OrderComponent,
    MenuComponent,
    AddEditMenuComponent,
    LoginComponent,
    MenuComponent,
    AddEditMenuComponent,
    RestaurantComponent,
    AddEditComponent,
    SearchByNamePipe,
    AddEditOrderComponent,
    RestaurantsRateComponent,
    RestaurantsRateAddEditComponent,
    EditProfileComponent,
    ProfileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
