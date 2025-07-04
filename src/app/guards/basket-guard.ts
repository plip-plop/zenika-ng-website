import { CanMatchFn } from '@angular/router';
import { BasketService } from '../services/basket-service';
import { inject } from '@angular/core';

export const basketGuard: CanMatchFn = (route, segments) => {
  const basketService = inject(BasketService);

  if (basketService.items().length) {
    return true;
  }

  return false;
};
