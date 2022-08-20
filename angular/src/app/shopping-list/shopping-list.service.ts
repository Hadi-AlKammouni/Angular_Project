import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  
  private ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredientd() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  // // First approach
  // addIngredients(ingredients: Ingredient[]) {
  //   for (let ingredient of ingredients) {
  //     this.addIngredient(ingredient)
  //   }
  // }

  // Second approach
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}