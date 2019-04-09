import { Component, OnInit} from '@angular/core';
import { ItemList } from '../model/ItemList';
import { ItemListService } from '../Services/item-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
  
export class ListComponent implements OnInit {

  constructor(private itemListService: ItemListService, private router: Router) { 
  }

  listOfItems: Array<ItemList>
  filteredList: Array<ItemList>
  item: ItemList

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

  goToItemDetail(itemId: number) {
    this.router.navigateByUrl('/index/detail/'+itemId);
    return true;
  }

  hideItem(item: ItemList){
    item.isShown=false;
  }
}
