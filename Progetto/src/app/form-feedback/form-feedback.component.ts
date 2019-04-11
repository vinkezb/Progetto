import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.scss']
})
export class FormFeedbackComponent implements OnInit {
  myform:FormGroup;
  constructor( private fb:FormBuilder, private router: Router) { 

  this.myform = this.fb.group({
   username :['', Validators.required],
   psw :['',Validators.required],
   email :['',Validators.required],
   telefono :['',Validators.required],
   nome:['',Validators.required],
   cognome:['',Validators.required]
   })
    
   };
   sendFeedback(){
    //verificare che username € ai tuoi utenti e la psw corrispondang
    this.router.navigateByUrl('/index/home');
    window.alert("Feedback sent"); (4)
  }

  ngOnInit() {
  }

}
