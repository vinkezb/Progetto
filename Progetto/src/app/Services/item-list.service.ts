import { Injectable } from '@angular/core';
import { ItemList } from '../model/ItemList';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  itemList: ItemList[]=[
    {itemId: 1, itemImage: "armani_exchange.jpg", itemName: "Armani Exchange", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 2, itemImage: "emporio_armani.jpg", itemName: "Emporio Armani", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 3, itemImage: "giorgio_armani.jpg", itemName: "Giorgio Armani", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 4, itemImage: "michael_kors.jpg", itemName: "Michaell Kors", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: true},
    {itemId: 5, itemImage: "oakley.jpg", itemName: "Oakley", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 6, itemImage: "prada.jpg", itemName: "Prada", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
    {itemId: 7, itemImage: "ray-ban.jpg", itemName: "Ray-ban", itemDescription: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", isFavorite: false},
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
