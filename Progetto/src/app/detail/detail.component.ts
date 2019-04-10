import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../Services/item-list.service';
import { ItemList } from '../model/ItemList';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: ItemList

  constructor(private itemListService: ItemListService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const idFromUrl = this.route.snapshot.paramMap.get('itemId');
    this.item = this.itemListService.getItem(idFromUrl ? Number(idFromUrl) : null);
  }

  goBackToList(){
    this.location.back();
  }
}
