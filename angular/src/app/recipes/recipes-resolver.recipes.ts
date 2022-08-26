import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    
    constructor(private dataStorageServcie: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageServcie.fetchRecipes()
    }

}