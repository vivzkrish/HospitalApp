import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PatientComponent} from "./patient/patient.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {AdminComponent} from "./admin/admin.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {SignupComponent} from "./patient/signup/signup.component";
import {SignInComponent} from "./patient/sign-in/sign-in.component";
import {AppoinmentComponent} from "./patient/appoinment/appoinment.component";
import {PatientHomeComponent} from "./patient/patient-home/patient-home.component";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateService} from "./patient/signup/can-deactivate-guard.service";
import {ConfirmAppoinmentComponent} from "./patient/confirm-appoinment/confirm-appoinment.component";
import {ResolveComponent} from "./patient/resolve/resolve.component";
import {ResolverService} from "./patient/resolve/resolver.service";
import {PropertyDetailComponent} from "./patient/property-detail/property-detail.component";

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'patient',component:PatientComponent,
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
  },
  {path:'doctors',component:DoctorsComponent},
  {path:'admin',component:AdminComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'not-found'}
];


@NgModule({

  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule
{

}
