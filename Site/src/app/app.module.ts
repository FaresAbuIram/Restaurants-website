import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './pages/map/map.component';
import { JwtModule } from "@auth0/angular-jwt";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ProfileComponent } from './pages/profiles/profile/profile.component';
import { EditProfileComponent } from './pages/profiles/edit-profile/edit-profile.component';
import { AllorderComponent } from './pages/allorder/allorder.component';
import { AllcustomerComponent } from './pages/allcustomer/allcustomer.component';



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
    MapComponent,
    ProfileComponent,
    EditProfileComponent,
    AllorderComponent,
    AllcustomerComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAQslllGejH8HEJRZiEdX_4XQpAmDdHIQ',
    }),
    JwtModule.forRoot({
      config: {
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    MatProgressSpinnerModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
