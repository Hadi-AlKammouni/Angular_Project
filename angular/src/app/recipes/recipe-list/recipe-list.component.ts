import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('First test recipe', 'This is 1st the description', 'https://th.bing.com/th/id/R.89b0b4650f29a17030bad22c9e883f61?rik=293O790OghSJ5Q&pid=ImgRaw&r=0'),
    new Recipe('Second test recipe', 'This is 2nd the description', 'https://th.bing.com/th/id/OIP.iWkh-Mq0JeIc7Nb8yzxShgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7'),
    new Recipe('Third test recipe', 'This is 3rd the description', 'https://th.bing.com/th/id/OIP.QTp2z7eTVzdqtP0kmh7DwgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
