import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'; // import recipe class

import { RecipeService } from '../recipe.service'; // No need to mention provider since it is already mentioned in app.module.ts. Just import is good enough

@Component({
  selector: 'cr-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

	recipes: Recipe[] = [];
	// Dummy selectedrecipe
	@Output() recipeSelected = new EventEmitter();
	// Dummy temporary recipe
	// recipe = new Recipe('Dummy', 'Dummy', 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=51790881');

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // Method from click event on recipe-list.component
  onSelected(recipe: Recipe) {
  	this.recipeSelected.emit(recipe);
  }

}
