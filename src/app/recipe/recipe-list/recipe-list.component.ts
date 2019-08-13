import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =  new EventEmitter<Recipe>();
recipes: Recipe[]=[
  new Recipe('GulabJamun','A Delicious Dessert','https://recipes.timesofindia.com/photo/52447240.cms'),
  new Recipe('Raspberry','A tasty fruit.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnbdk5uD8kiKJAQJdGuGwlX3VxkolDyf_aH9qAk2AyWlAXUeAIg')
];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log('received');
    console.log(recipe);
  }

}
