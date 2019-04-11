import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/models/routing-enum';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  myform:FormGroup;
psw:string;
   constructor( private fb:FormBuilder) { 

   this.myform = this.fb.group({
    username :['', Validators.required],
    psw :['',Validators.required],
    email :['',Validators.required],
    telephone :['',Validators.required],
    nome:['',Validators.required],
    cognome:['',Validators.required]
    })    };

ngOnInit() {  }

  Login(){
    console.log(this.myform.value);
  }
 
  Redirect(){
    console.log("function called");
  }

  doLogin(username: string){
    sessionStorage.user = username;
    sessionStorage.password = this.psw;
  }
}
