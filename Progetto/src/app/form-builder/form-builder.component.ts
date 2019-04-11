import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingEnum } from '../Models/routing-enum';
import { LoginServiceService } from '../Services/login-service.service';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  myform:FormGroup;
   constructor( private fb:FormBuilder, private loginService: LoginServiceService, private router: Router) { 

   this.myform = this.fb.group({
    username :['', Validators.required],
    password :['',Validators.required],
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

  doLogin(){
    //verificare che username € ai tuoi utenti e la psw corrispondang
    //sessionStorage.setItem(this.myform.value.username,this.myform.value.password);
    let result : boolean = this.loginService.Checkuser(this.myform.value.username,this.myform.value.password)
    if (result){

      sessionStorage.setItem("chiave",this.myform.value.username);
      this.router.navigateByUrl('/index/home');
    }
  }

Register(){
  this.router.navigateByUrl('/index/register')
}

}
