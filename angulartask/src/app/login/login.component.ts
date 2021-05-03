import { Component,ViewChild, Output} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router'; 
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

    email='geetha@gmail.com';
    password='geetha123%';
   


  
  registerForm: FormGroup;
  submitted = false;
 myFlag = false;
 selected = 'Advanced Subscription';

 
onSubmit(){
  this.submitted = true;

  if (this.registerForm.valid) {
    this.router.navigateByUrl('/values');
    console.log("Form Submitted!");
}
else{
  this.myFlag = true;
}
}
constructor(private router: Router,private formBuilder: FormBuilder) {
  
}

ngOnInit(): void {
  this.registerForm = this.formBuilder.group({
    email: [,{validators: [Validators.required, Validators.email],
      updateOn: "change"}],  
      password: [, { validators: [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[0-8])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)], updateOn: "change" }],
    });    
}
reset(){
    var delBtn = confirm(" Are you sure you want to discard the changes made  ");
    if ( delBtn == true ) {
      this.registerForm.reset();  
 
  }
}

} 
  


