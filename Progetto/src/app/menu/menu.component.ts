import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  menulist : MenuItem[] = [
    {id:1, description: 'Homepage', selected: false, },
    {id:2, description: 'Lista', selected: false, },
    {id:3, description: 'Cards', selected: false, },
    {id:4, description: 'Feedback', selected: false, },
    {id:1, description: 'Esci', selected: false, },
  ]

  constructor() { }

  ngOnInit() {
  }

}
