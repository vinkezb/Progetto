import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
users : {username: string, password:string}[] =[
  {username:"utente", password:"password"}
];

Checkuser(username, password): boolean{
  

return true;

}
  constructor() { }
}
