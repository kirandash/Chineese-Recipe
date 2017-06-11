/*import { Injectable } from '@angular/core';

@Injectable()*/

import { Ingredient } from '../ingredient';

export class ShoppingListService {
	private items: Ingredient[] = [];
  constructor() { }

  getItems() {
  	return this.items;
  }

  addItems(items: Ingredient[]) {
  	// console.log(this.items);
  	Array.prototype.push.apply(this.items, items); // Equivalent to run a loop and push all the items one by one to the target array
  }

  addItem(item: Ingredient) {
  	this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1); // Remove the selected item from items array
  }

}
