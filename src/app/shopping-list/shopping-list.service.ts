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

}
