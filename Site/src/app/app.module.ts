import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BasiccontentComponent } from './pages/basiccontent/basiccontent.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './pages/orders/orders.component';
<<<<<<< HEAD
import { MenuComponent } from './pages/menus/menu/menu.component';
import { AddEditMenuComponent } from './pages/menus/add-edit-menu/add-edit-menu.component';
import { AddEditRestaurantComponent } from './pages/restaurant/add-edit-restaurant/add-edit-restaurant.component';
=======
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menus/menu/menu.component';
import { AddEditMenuComponent } from './pages/menus/add-edit-menu/add-edit-menu.component';
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 222b26d09004d077b28df41bffe8707d6719e92b

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasiccontentComponent,
    RegisterComponent,
    OrdersComponent,
<<<<<<< HEAD
    MenuComponent,
    AddEditMenuComponent,
    AddEditRestaurantComponent
=======
    LoginComponent,
    MenuComponent,
    AddEditMenuComponent
>>>>>>> 222b26d09004d077b28df41bffe8707d6719e92b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
<<<<<<< HEAD
=======
    HttpClientModule
>>>>>>> 222b26d09004d077b28df41bffe8707d6719e92b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
