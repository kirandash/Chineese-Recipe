import { Ingredient } from '../ingredient';

// Recipe class to define how a recipe will look like
export class Recipe {
	constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {

	}
}
