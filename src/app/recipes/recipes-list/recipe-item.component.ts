import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe'; // import recipe class

@Component({
  selector: 'cr-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe: Recipe; // recipe will be of type Recipe // @Input() is used since recipe and recipeId are being set from external component(recipe-list)
	// Property binding
	recipeId: number; // recipeId will be of type number

  	constructor() { }

	ngOnInit() {
	}

}
