import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService) {}

  get token() {
    return this.cookieService.get('token');
  }

  setToken(token: string, keep = false) {
    this.cookieService.set(
      'token',
      token,
      keep ? 365 : undefined,
      '/',
      undefined,
      true,
      'Strict'
    );
  }
}
