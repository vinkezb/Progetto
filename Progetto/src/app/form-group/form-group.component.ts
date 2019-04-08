import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.sass']
})
export class FormGroupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
groupform = new FormGroup({
  username : new FormControl(''),
  psw : new FormControl(''),
  email : new FormControl(''),
  phone : new FormControl('')
});
}
