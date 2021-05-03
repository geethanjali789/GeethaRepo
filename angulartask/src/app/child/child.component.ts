import { Component,ChangeDetectorRef, EventEmitter,Output,ViewChildren,ViewChild, AfterViewInit,Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ChangeDetectionStrategy } from "@angular/core";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']

})
export class ChildComponent  { 
  @ViewChild(LoginComponent) child1: LoginComponent;
  


constructor(private cd: ChangeDetectorRef) { }
 @ViewChild(LoginComponent) child ;
        email='';
         password='';
         selected ='';

    ngAfterViewInit() {

      this. email=this.child.email;
      this. password=this.child.password;
this.selected=this.child.selected;
    this.cd.detectChanges();
    }
     
   
      
  }


      


