import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'cr-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
	items: Ingredient[]= [];
	selectedItem: Ingredient = null; // no selectedItem 

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  	this.items = this.sls.getItems();
  }

  onSelectItem(item: Ingredient) {
  	this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }
}
