// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];

  // @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  constructor(private RecipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipe()
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe)
  // }

}
