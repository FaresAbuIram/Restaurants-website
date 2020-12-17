import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private router: Router, private service: DataService, private jwtHelper: JwtHelperService) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.service.loggedIn())
      if (!this.jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
        if (route.data.role && this.service.role() != "true") {
          this.router.navigate(['/'])
          return false;
        }
        else {
          return true
        }
      }


    this.router.navigate(['/login']);
    return false
  }



  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
