import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
// import { FormvaluesComponent } from './formvalues/formvalues.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {
    path:'' ,component:LoginComponent
  },
  {
    path:'values' ,component:ChildComponent 
  },
  {
    path:'logout' ,component:LoginComponent
  }
 

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
