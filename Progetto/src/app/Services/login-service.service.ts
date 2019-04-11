import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
users : {username: string, password:string}[] =[
  {username:"utente", password:"password"},
  {username:"admin", password:"admin"}
];

Checkuser(username, password): boolean{
  if(username === "admin" ) {
    return true;}
}

addUser(){

}
  constructor() { }
}
