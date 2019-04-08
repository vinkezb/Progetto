import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menulist : MenuItem[] = [
    {id:1, description: 'Homepage', selected: false, endpoint:'/home'},
    {id:2, description: 'Lista', selected: false, endpoint: '/lista' },
    {id:3, description: 'Cards', selected: false, endpoint: '/cards' },
    {id:4, description: 'Feedback', selected: false, endpoint: '/feedback' },
    {id:4, description: 'Profile', selected: false, endpoint: '/profile' },
    {id:1, description: 'Esci', selected: false, endpoint:'/' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
