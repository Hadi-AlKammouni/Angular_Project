import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  id!: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'] // not good approach
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    // OR
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})

  }

}
