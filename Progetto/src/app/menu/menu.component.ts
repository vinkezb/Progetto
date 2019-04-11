import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { RoutingEnum } from 'src/app/models/routing-enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menulist : MenuItem[] = [
    {id:1, description: 'Homepage', selected: false, endpoint: RoutingEnum.home+'/'+RoutingEnum.home},
    {id:2, description: 'Lista', selected: false, endpoint: '/'+ RoutingEnum.home +'/'+ RoutingEnum.lista  },
    {id:3, description: 'Cards', selected: false, endpoint: '/'+ RoutingEnum.home +'/'+ RoutingEnum.cards  },
    {id:4, description: 'Feedback', selected: false, endpoint: '/'+ RoutingEnum.home +'/'+ RoutingEnum.feedback  },
    {id:5, description: 'Login', selected: false, endpoint:'/'+ RoutingEnum.login },
    {id:6, description: 'Profilo', selected: false, endpoint: '/'+ RoutingEnum.profile },
   
  ]

  constructor() { }

  ngOnInit() {
  }

}
