import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe'; // import recipe class
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'cr-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe; // From list component
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
  	// console.log(this.selectedRecipe.ingredients);
  	this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
