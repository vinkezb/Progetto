import { Component, OnInit} from '@angular/core';
import { ItemList } from '../model/ItemList';
import { ItemListService } from '../Services/item-list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
  
export class ListComponent implements OnInit {

  constructor(private itemListService: ItemListService) { 
  }

  listOfItems: Array<ItemList>
  filteredList: Array<ItemList>

  ngOnInit() {
    this.listOfItems = this.itemListService.getListOfItems();
    this.filteredList=this.itemListService.getListOfItems();
  }

  isYourFavorite(item: ItemList) {
    item.isFavorite  = !item.isFavorite;
  }

  shareItem(item: ItemList) {

  }

  filterList(input: string) {
   return this.filteredList=this.listOfItems.filter(item =>{
      return !input || item.itemName.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    })
  }
}
