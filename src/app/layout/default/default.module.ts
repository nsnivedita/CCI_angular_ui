import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from '../../pages/home/home.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { AboutusComponent } from '../../pages/aboutus/aboutus.component';



@NgModule({
  declarations: [DefaultComponent,HomeComponent,AboutusComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule
  ]
})
export class DefaultModule { }
