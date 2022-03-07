import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonFormComponent } from './admin/addon-form/addon-form.component';
import { AddonsComponent } from './admin/addons/addons.component';
import { LoginComponent } from './admin/login/login.component';
import { MonthlyplansComponent } from './admin/monthlyplans/monthlyplans.component';
import { PremiumplansComponent } from './admin/premiumplans/premiumplans.component';
import { SignupComponent } from './admin/signup/signup.component';
import { MonthlyFormComponent } from './admin/monthly-form/monthly-form.component';
import { PremiumFormComponent } from './admin/premium-form/premium-form.component';
import { UseraddonsComponent } from './user/useraddons/useraddons.component';
import { UserperiumComponent } from './user/userperium/userperium.component';
import { UsermonthlyComponent } from './user/usermonthly/usermonthly.component';

const routes: Routes = [
  
  {
    path:'',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'addon',
    component:AddonsComponent
  },
  {
    path:'premium',
    component:PremiumplansComponent
  },
  {
    path:'monthly',
    component:MonthlyplansComponent
  },
  {
    path:'addform',
    component:AddonFormComponent
  },
  {
    path:'premiumform',
    component:PremiumFormComponent
  },
  {
    path:'monthlyform',
    component:MonthlyFormComponent
  },
  {
    path:'useraddon',
    component:UseraddonsComponent
  },
  {
    path:'userpremium',
    component:UserperiumComponent
  },
  {
    path:'usermonthly',
    component:UsermonthlyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
