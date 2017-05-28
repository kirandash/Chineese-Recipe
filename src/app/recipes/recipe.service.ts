import { Injectable } from '@angular/core';
import { Recipe } from './recipe'; // import recipe class
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {

	// Centralized recipe data
	private recipes: Recipe[] = [
	    new Recipe('Chicken Fry', 'Extra Spicy', 'https://i1.wp.com/files.hungryforever.com/wp-content/uploads/2017/01/05113353/Chicken-Fry-Masala.jpg?w=1269&strip=all&quality=80', 
	    	[ // Ingredients array
	    		new Ingredient('Chicken', 2),
	    		new Ingredient('Curd', 5)
	    	]
	    ),
	    new Recipe('Chicken 65', 'Spicy', 'http://indianhealthyrecipes.com/wp-content/uploads/2014/05/chicken-65-recipe.jpg', []) // the last array is for ingredient
	  ]; // recipes array being set to an empty array which will be fed to recipe-item.component
		// Dummy selectedrecipe

  constructor() { }

  getRecipes() {
  	return this.recipes;
  }

}