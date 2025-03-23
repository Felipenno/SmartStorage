import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    ,provideRouter(routes)
    ,provideHttpClient()
    ,{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
    ,provideMomentDateAdapter()
  ]
};
