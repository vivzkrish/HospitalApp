import {NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import {PatientComponent} from "./patient.component";
import {PatientHomeComponent} from "./patient-home/patient-home.component";
import {CanDeactivateService} from "./signup/can-deactivate-guard.service";
import {SignupComponent} from "./signup/signup.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {AppoinmentComponent} from "./appoinment/appoinment.component";
import {ConfirmAppoinmentComponent} from "./confirm-appoinment/confirm-appoinment.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {ResolveComponent} from "./resolve/resolve.component";
import {ResolverService} from "./resolve/resolver.service";

const patientRoutes: Routes = [

  {path:'',component:PatientComponent,
    children:[
      {path:'',component:PatientHomeComponent},
      {path:'patient-home',component:PatientHomeComponent},
      {path:'signup',canDeactivate:[CanDeactivateService],component:SignupComponent},
      {path:'sign-in',component:SignInComponent},
      /*{path:'appoinment',canActivate:[AuthGuardService],component:AppoinmentComponent},*/
      {path:'appoinment',component:AppoinmentComponent},
      {path:'appoinment/:data.PropertyId',component:ConfirmAppoinmentComponent},
      {path:'property-detail',component:PropertyDetailComponent},
      {path:'resolve',component:ResolveComponent,resolve:{propertyList:ResolverService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(patientRoutes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
