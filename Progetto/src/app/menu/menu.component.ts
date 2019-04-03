import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  menulist : MenuItem[] = [
    {id:1, description: 'Homepage', selected: false, endpoint:'/home'},
    {id:2, description: 'Lista', selected: false, endpoint: '/lista' },
    {id:3, description: 'Cards', selected: false, endpoint: '/cards' },
    {id:4, description: 'Feedback', selected: false, endpoint: '/feedback' },
    {id:5, description: 'Login', selected: false, endpoint:'/login' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
