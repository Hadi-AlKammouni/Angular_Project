// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private RecipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes()
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe)
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
