import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

// console.log('Is authenticated');
// console.log([route, state]);
const authService = inject( AuthService );
const router = inject( Router );

if ( authService.authStatus() === AuthStatus.authenticated ) {
  return true;
}

router.navigateByUrl('/auth/login');
return false;


  return true;
};
