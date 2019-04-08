import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent implements OnInit {
  myform:FormGroup;
   constructor( private fb:FormBuilder) { 

   this.myform = this.fb.group({
    username :['', Validators.required],
    psw :['',Validators.required],
    email :['',Validators.required],
    telephone :['',Validators.required],
    nome:['',Validators.required],
    cognome:['',Validators.required]
    })

     
    };

ngOnInit() {  }

  Login(){
    console.log(this.myform.value);
  }
 
  Redirect(){
    console.log("function called");

  }

}
