import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
      const authReq = req.clone({
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Basic ${window.btoa(this.authService.username + ":" + this.authService.password)}`
          })
      });
      return next.handle(authReq);
  } else {
      return next.handle(req);
  }
}
}
