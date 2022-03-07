import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseraddonsComponent } from './useraddons/useraddons.component';
import { UserperiumComponent } from './userperium/userperium.component';
import { UsermonthlyComponent } from './usermonthly/usermonthly.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RechargeComponent } from './recharge/recharge.component';



@NgModule({
  declarations: [
  
    UseraddonsComponent,
       UserperiumComponent,
       UsermonthlyComponent,
       RechargeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UserModule { }
