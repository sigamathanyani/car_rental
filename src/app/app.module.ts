import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthService } from './services/auth.service';
import { HeadersInterceptor } from './services/headers.interceptor';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarCatComponent } from './components/car-cat/car-cat.component';
import { FilterComponent } from './components/filter/filter.component';
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    CarCatComponent,
    FilterComponent,
    CarComponent,
    AddCarComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path:'',component:HomePageComponent},
      {path:'home',component:HomePageComponent},
      {path:'register',component:AuthPageComponent},
      {path:'login',component:AuthPageComponent},
      {path:'add-car',component:AddCarComponent},
    ])
  ],
  providers: [
    AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
