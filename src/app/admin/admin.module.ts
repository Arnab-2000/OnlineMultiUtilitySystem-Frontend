import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PremiumplansComponent } from './premiumplans/premiumplans.component';
import { MonthlyplansComponent } from './monthlyplans/monthlyplans.component';
import { AddonsComponent } from './addons/addons.component';
import { AddonFormComponent } from './addon-form/addon-form.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    PremiumplansComponent,
    MonthlyplansComponent,
    AddonsComponent,
    AddonFormComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
