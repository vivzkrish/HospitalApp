import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {PatientComponent} from "./patient.component";
import {SignupComponent} from "./signup/signup.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {AppoinmentComponent} from "./appoinment/appoinment.component";
import {PatientHomeComponent} from "./patient-home/patient-home.component";
import {ConfirmAppoinmentComponent} from "./confirm-appoinment/confirm-appoinment.component";
import {ResolveComponent} from "./resolve/resolve.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {PatientRoutingModule} from "./patient-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import { GenderDirective } from './gender.directive';
import { ErrorDirective } from './error.directive';

@NgModule({
  declarations: [
    PatientComponent,
    SignupComponent,
    SignInComponent,
    AppoinmentComponent,
    PatientHomeComponent,
    ConfirmAppoinmentComponent,
    ResolveComponent,
    PropertyDetailComponent,
    GenderDirective,
    ErrorDirective,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    NgxPaginationModule
  ],

})
export class PatientModule { }
