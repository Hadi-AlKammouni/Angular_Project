import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('First test recipe', 'This is the 1st description', 'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0'),
        new Recipe('Second test recipe', 'This is the 2nd description', 'https://th.bing.com/th/id/OIP.iWkh-Mq0JeIc7Nb8yzxShgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7'),
        new Recipe('Third test recipe', 'This is the 3rd description', 'https://th.bing.com/th/id/OIP.QTp2z7eTVzdqtP0kmh7DwgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7')
    ];

    getRecipe() {
        return this.recipes.slice();
    }

}