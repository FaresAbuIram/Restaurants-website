import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BasiccontentComponent } from './pages/basiccontent/basiccontent.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './pages/orders/orders.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menus/menu/menu.component';
import { AddEditMenuComponent } from './pages/menus/add-edit-menu/add-edit-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';
import { AddEditComponent } from './pages/restaurants/add-edit/add-edit.component';
import { SearchByNamePipe } from './pipe';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasiccontentComponent,
    RegisterComponent,
    OrdersComponent,
    MenuComponent,
    AddEditMenuComponent,
    LoginComponent,
    MenuComponent,
    AddEditMenuComponent,
    RestaurantComponent,
    AddEditComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
