import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { DentictsComponent } from './denticts/denticts.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'services' , component:ServicesComponent},
  {path:'service-details' , component:ServiceDetailsComponent},
  {path:'dentict' , component:DentictsComponent},
  {path:'doctor-details' , component:DoctorDetailsComponent},
  {path:'booking' , component:BookingComponent},
  {path:'testimonials' , component:TestimonialsComponent},
  {path:'privacy' , component:PrivacyComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'contact' , component:ContactComponent},
  {path:'**' , component:NotfoundComponent},
  {path:'notfound' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
