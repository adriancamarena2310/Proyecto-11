import type { CanActivateFn } from '@angular/router';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

console.log('Is authenticated');
console.log([route, state]);



  return true;
};
