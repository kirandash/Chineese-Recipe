import { Ingredient } from '../ingredient';

// Recipe class to define how a recipe will look like
export class Recipe {
	constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {

	}
}
