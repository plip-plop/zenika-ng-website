import { InjectionToken, ValueProvider } from "@angular/core";
// Create an injection token APP_TITLE in src/app/app.token.ts
// Provide the token using a ValueProvider with the value
// "Bienvenue sur Zenika Ecommerce"

export const APP_TITLE = new InjectionToken<string>('APP_TITLE');

export const appTitleProvider: ValueProvider = {
    provide: APP_TITLE,
    useValue: 'Plop',
  };
  
// export providerAppTitle 