import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { BasketService } from '../services/basket.service';

export const basketGuard: CanActivateFn = () => {
  const basketService = inject(BasketService);

  return !!basketService.items.length;
};
