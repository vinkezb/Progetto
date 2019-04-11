import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate, CanActivateChild } from '@angular/router';
import { ListComponent } from '../list/list.component';


@Injectable()
export class AuthGuard implements CanActivateChild, CanDeactivate<ListComponent> {
    canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if (!sessionStorage.user) {
            window.alert("You don't have permission to view this page"); (4)
            this.router.navigateByUrl('/login');
            return false;
        } else {
            return true;
        }

    }

    canDeactivate(component: ListComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if (component.canNavigateForward()) {
            return true;
        } else {
            return false;
        }
    }


    constructor(private router: Router) {

    }

}