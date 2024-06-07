import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmincComponent } from './adminc.component';
import { UsersPageComponent } from './users-page/users-page.component';


@NgModule({
  declarations: [
    AdmincComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
