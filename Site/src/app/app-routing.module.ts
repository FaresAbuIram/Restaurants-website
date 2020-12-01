import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasiccontentComponent } from './pages/basiccontent/basiccontent.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {
    path: '', component: BasiccontentComponent, children: [
      { path: '', component: DashboardComponent },
      {path : 'orders', component: OrdersComponent}
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
