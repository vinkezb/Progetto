import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
title = sessionStorage.getItem("chiave");
nome = sessionStorage.getItem("chiave");
email= sessionStorage.getItem("chiave");
cognome="rossi";
sesso="maschio";

  constructor() { }

  

  ngOnInit() {
  }

}
