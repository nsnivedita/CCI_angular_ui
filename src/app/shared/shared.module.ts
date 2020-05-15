import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [ HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent,SidebarComponent]

})
export class SharedModule { }
