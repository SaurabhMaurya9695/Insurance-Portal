import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { PaymentComponent } from './components/payment/payment.component';

import { DateAgoPipe } from './pipes/date-ago.pipe';

import Amplify from 'aws-amplify';
import { FinacialComponent } from './components/finacial/finacial.component';
// import { authInterceptorProviders } from './services/auth.interceptor';
// import { AuthService } from './services/auth.service';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: 'us-west-2',
    userPoolId: 'us-west-2_suSvpK4nC',
    userPoolWebClientId: '381fidnic8mc7adsr56blfiqvp',
  },
});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    PlanListComponent,
    PaymentComponent,
    DateAgoPipe,
    FinacialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // providers:[authInterceptorProviders , AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
