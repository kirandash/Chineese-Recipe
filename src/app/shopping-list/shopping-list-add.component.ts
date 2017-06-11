import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'cr-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})

export class ShoppingListAddComponent implements OnChanges {
	isAdd = true;
  	@Input() item: Ingredient;
    @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }

	ngOnChanges(changes) { //changes is angular 2 js object that holds all the values which can be changed from outside
		//will be called whenever anything changes related to its component
		if(changes.item.currentValue === null) {// means no item is selected
			this.isAdd = true; // add mode on if no item is selected
			this.item = { name: null, amount: null };// so that item is not null but the fields are null thus item.name wont return error on shopping-list-add.component.ts file
		}else{
			this.isAdd = false; // edit mode
		}
	}

  onSubmit(ingredient: Ingredient){
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
  	if(!this.isAdd) {
  		// Edit
      this.sls.editItem(this.item, newIngredient);
      this.onClear();
  	}else{
  		// add
  		this.item = newIngredient;
  		this.sls.addItem(this.item);
  	}
  }

  // delete and clear method
  onDelete() {
    this.sls.deleteItem(this.item);
  }

  onClear() {
    // On clear go back to add mode and also remove the populated fields
    this.isAdd = true; 
    this.cleared.emit(null); // emit null
  }
}
