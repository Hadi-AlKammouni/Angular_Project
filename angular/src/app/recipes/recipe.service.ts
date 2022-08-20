import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty', 
            'A super tasty plate', 
            'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0',
            [new Ingredient('Meat',1), new Ingredient('French Fries',15)]
        ),
        new Recipe(
            'Delicious', 
            'Wow!', 
            'https://th.bing.com/th/id/OIP.iWkh-Mq0JeIc7Nb8yzxShgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7',
            [new Ingredient('Cheese',4), new Ingredient('Juice',1)]
        ),
        new Recipe(
            'Fantastic', 
            'Very good', 
            'https://th.bing.com/th/id/OIP.QTp2z7eTVzdqtP0kmh7DwgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7',
            [new Ingredient('Ketchup',1)]
        )
    ];

    getRecipe() {
        return this.recipes.slice();
    }

}