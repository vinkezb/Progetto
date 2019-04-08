import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormControl } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  username = new FormControl('');
  psw = new FormControl('');
  email = new FormControl('');



  constructor() { }

  ngOnInit() {
  }

}
