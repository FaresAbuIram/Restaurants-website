import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasiccontentComponent } from './pages/basiccontent/basiccontent.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEditMenuComponent } from './pages/menus/add-edit-menu/add-edit-menu.component';
import { MenuComponent } from './pages/menus/menu/menu.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestaurantslistComponent } from './pages/restaurant/restaurantslist/restaurantslist.component';


const routes: Routes = [
  {
    path: '', component: BasiccontentComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'menus', component: MenuComponent },
      { path: 'menus/add-edit/:id', component: AddEditMenuComponent },
      { path: 'restaurants', component: RestaurantslistComponent }
    ]
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
