import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Tasty', 
    //         'A super tasty plate', 
    //         'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0',
    //         [new Ingredient('Meat',1), new Ingredient('French Fries',15)]
    //     ),
    //     new Recipe(
    //         'Delicious', 
    //         'Wow!', 
    //         'https://th.bing.com/th/id/OIP.iWkh-Mq0JeIc7Nb8yzxShgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    //         [new Ingredient('Cheese',4), new Ingredient('Juice',1)]
    //     ),
    //     new Recipe(
    //         'Fantastic', 
    //         'Very good', 
    //         'https://th.bing.com/th/id/OIP.QTp2z7eTVzdqtP0kmh7DwgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    //         [new Ingredient('Ketchup',1)]
    //     )
    // ];
    
    private recipes: Recipe[] = []

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.recipesChanged.next(this.recipes.slice())
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice())
    }

}