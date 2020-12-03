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
import { LoginComponent } from './pages/login/login.component';
=======
import { MenuComponent } from './pages/menus/menu/menu.component';
import { AddEditMenuComponent } from './pages/menus/add-edit-menu/add-edit-menu.component';
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 7608c833214ca529537d94b70a7498ea48f98b6c

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasiccontentComponent,
    RegisterComponent,
    OrdersComponent,
<<<<<<< HEAD
    LoginComponent
=======
    MenuComponent,
    AddEditMenuComponent
>>>>>>> 7608c833214ca529537d94b70a7498ea48f98b6c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
