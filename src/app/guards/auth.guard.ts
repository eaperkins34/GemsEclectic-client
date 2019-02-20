import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (!localStorage.getItem('currentUser')) {
        this.router.navigate(['/login']);
        return observer.next(false);
      } else {
        return observer.next(true);
      }
    });
  }
}
