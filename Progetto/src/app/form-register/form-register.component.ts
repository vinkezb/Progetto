import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.sass']
})
export class FormRegisterComponent implements OnInit {
  myform:FormGroup;

  ngOnInit() {  }
  constructor( private fb:FormBuilder){
 
  this.myform = this.fb.group({
    username :['', Validators.required],
    psw :['',Validators.required],
    email :['',Validators.required],
    telephone :['',Validators.required],
    nome:['',Validators.required],
    cognome:['',Validators.required]
    });
  };

}
  
