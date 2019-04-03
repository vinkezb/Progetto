import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent implements OnInit {
  myform:FormGroup;

  constructor( private fb:FormBuilder) { 

   this.myform = this.fb.group({
    username :[''],
    psw :[''],
    email :['']
  });
}
ngOnInit() {  }

  Login(){
    console.log(this.myform.value);
  }
 

}
