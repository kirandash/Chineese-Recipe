import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'; // import recipe class

@Component({
  selector: 'cr-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

	recipes: Recipe[] = []; // recipes array being set to an empty array which will be fed to recipe-item.component
	// Dummy selectedrecipe
	@Output() recipeSelected = new EventEmitter();
	// Dummy temporary recipe
	recipe = new Recipe('Dummy', 'Dummy', 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=51790881');

  constructor() { }

  ngOnInit() {
  }

  // Method from click event on recipe-list.component
  onSelected(recipe: Recipe) {
  	this.recipeSelected.emit(recipe);
  }

}
