import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.modules";
import { SignupComponent } from './patient/signup/signup.component';
import { SignInComponent } from './patient/sign-in/sign-in.component';
import { AppoinmentComponent } from './patient/appoinment/appoinment.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import {SignupService} from "./patient/signup/signup.service";
import {AuthGuardService} from "./auth-guard.service";
import {SignInService} from "./patient/sign-in/sign-in.service";
import {CanDeactivateService} from "./patient/signup/can-deactivate-guard.service";

import { ConfirmAppoinmentComponent } from './patient/confirm-appoinment/confirm-appoinment.component';
import {GetImageService} from "./patient/confirm-appoinment/get-image.service";
import { ResolveComponent } from './patient/resolve/resolve.component';
import {ResolverService} from "./patient/resolve/resolver.service";
import {AppoinmentService} from "./patient/appoinment.service";
import { PropertyDetailComponent } from './patient/property-detail/property-detail.component';
import {NgxPaginationModule} from "ngx-pagination";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    DoctorsComponent,
    AdminComponent,
    PageNotFoundComponent,
    SignupComponent,
    SignInComponent,
    AppoinmentComponent,
    PatientHomeComponent,
    ConfirmAppoinmentComponent,
    ResolveComponent,
    PropertyDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    BootstrapModalModule
   ],
  providers: [SignupService,SignInService,AuthGuardService,CanDeactivateService,
    AppoinmentService,GetImageService, ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
