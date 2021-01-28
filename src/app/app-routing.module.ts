import { TeamComponent } from './team/team.component';
import { SendfreelinkComponent } from './sendfreelink/sendfreelink.component';
import { IncomeComponent } from './income/income.component';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
  },
{
  path: "login",
  component: LoginComponent,
},

{
  path:"register",
  component: RegisterComponent,
},
{
  path:"dashboard",
  component: DashboardComponent,
},

{
  path:"active-account",
  component: ActiveAccountComponent,
},

{
  path:"contact-us",
  component: ContactUsComponent,
},

{
  path:"income",
  component: IncomeComponent,
},

{
  path:"payment-history",
  component: PaymentHistoryComponent,
},

{
  path:"sendfreelink",
  component: SendfreelinkComponent,
},

{
  path: "team",
  component: TeamComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
