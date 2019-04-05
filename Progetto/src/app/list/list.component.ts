import { Component, OnInit} from '@angular/core';
import { ItemList } from '../model/ItemList';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
  
export class ListComponent implements OnInit {

  itemList: ItemList[]=[
    {itemImage: "aviator.jpg", itemName: "Nome dell'item1", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemImage: "half_rim.jpg", itemName: "Nome dell'item2", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemImage: "Peak_BlackIce.jpg", itemName: "Nome dell'item3", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemImage: "round_metal.jpg", itemName: "Nome dell'item4", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: true},
    {itemImage: "striped_percey.jpg", itemName: "Nome dell'item5", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false}
  ]

  constructor() { 
  }

 

  ngOnInit() {
  }

  isYourFavorite(item: ItemList) {
    item.isFavorite  = !item.isFavorite;
  }

  shareItem(item: ItemList) {

  }
}
