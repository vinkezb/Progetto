import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../Services/item-list.service';
import { ItemList } from '../model/ItemList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  listOfItems: Array<ItemList>
  filteredList: Array<ItemList>
  
  constructor(private itemListService: ItemListService, private router: Router) { }

  ngOnInit() {
    this.listOfItems=this.itemListService.getListOfItems();
    this.filteredList=this.itemListService.getListOfItems();
  }

  goToItemDetail(itemId: number) {
    this.router.navigateByUrl('/index/detail/'+itemId);
    return true;
  }
  
}
