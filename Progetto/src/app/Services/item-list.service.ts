import { Injectable } from '@angular/core';
import { ItemList } from '../model/ItemList';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  itemList: ItemList[]=[
    {itemId: 1, itemImage: "aviator.jpg", itemName: "Aviator", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 2, itemImage: "half_rim.jpg", itemName: "Half Rim", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 3, itemImage: "Peak_BlackIce.jpg", itemName: "Peak Black Ice", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 4, itemImage: "round_metal.jpg", itemName: "Round Metal", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: true},
    {itemId: 5, itemImage: "striped_percey.jpg", itemName: "Striped Percey", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false}
  ]

  constructor() { }

  getListOfItems() : Array<ItemList> {
    return this.itemList;
  }

  getItem(itemId): ItemList {
    return this.itemList.find(item => {
      return item.itemId === itemId;
    })
  }
}
