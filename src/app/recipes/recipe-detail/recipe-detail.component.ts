import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe'; // import recipe class

@Component({
  selector: 'cr-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe; // From list component
  constructor() { }

  ngOnInit() {
  }

}
