import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultModule } from './layout/default/default.module';
import { AuthModule } from './auth/auth.module'
import {HttpServiceInterceptor} from 'src/app/services/http-service.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    DefaultModule,
    FlexLayoutModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HttpServiceInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
