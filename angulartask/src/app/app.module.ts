import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms' ; 
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChildComponent } from './child/child.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChildComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    NgbModule ,
    MatFormFieldModule,
        MatInputModule,
    MDBBootstrapModule.forRoot(),
    MatInputModule,
    ShowHidePasswordModule,
    MatIconModule,
    MatCardModule



  ],
 
  providers: [],
  entryComponents:[],

  bootstrap: [AppComponent]
})
export class AppModule { }
