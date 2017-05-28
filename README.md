# ChineeseRecipe

# Codes (Angular cli)
ng new chineese-recipe --prefix cr
ng g c header --flat
cd src/app
ng g c recipes
cd recipes
ng g c recipes-list
cd recipes-list
ng g c recipe-item
cd ..
ng g cl recipe
ng g c recipe-detail
ng g c shopping-list
cd shopping-list
ng g c shopping-list-add
ng destroy component shopping-list-add

# Directives
Directives are instructions e.g. *ngFor="let item of items"
1. Attribute directives: they interact with the element to which they are applied to e.g. ngClass and ngStyle e.g. <input [ngClass]> the square brackets are for property binding

2. Structural directives interact with the current view container and change the structure of the DOM/HTML code e.g. *ngFor and *ngIf

ng g d dropdown

# Angular Debugging
https://augury.angular.io/

# Services
cd recipes
ng g s recipe