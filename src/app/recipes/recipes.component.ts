import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe'; // import recipe class

@Component({
  selector: 'cr-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

	selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
