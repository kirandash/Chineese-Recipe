import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'; // import recipe class

@Component({
  selector: 'cr-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

	recipes: Recipe[] = [
    new Recipe('Chicken Fry', 'Extra Spicy', 'https://i1.wp.com/files.hungryforever.com/wp-content/uploads/2017/01/05113353/Chicken-Fry-Masala.jpg?w=1269&strip=all&quality=80', []),
    new Recipe('Chicken 65', 'Spicy', 'http://indianhealthyrecipes.com/wp-content/uploads/2014/05/chicken-65-recipe.jpg', []) // the last array is for ingredient
  ]; // recipes array being set to an empty array which will be fed to recipe-item.component
	// Dummy selectedrecipe
	@Output() recipeSelected = new EventEmitter();
	// Dummy temporary recipe
	// recipe = new Recipe('Dummy', 'Dummy', 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=51790881');

  constructor() { }

  ngOnInit() {
  }

  // Method from click event on recipe-list.component
  onSelected(recipe: Recipe) {
  	this.recipeSelected.emit(recipe);
  }

}
