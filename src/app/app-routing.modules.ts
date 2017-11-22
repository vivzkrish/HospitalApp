import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {AdminComponent} from "./admin/admin.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";



const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'patient',loadChildren:'./patient/patient.module#PatientModule'},
   {path:'doctors',component:DoctorsComponent},
   {path:'admin',component:AdminComponent},
 /* {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'not-found'}*/
];


@NgModule({

  imports:[
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule
{

}
