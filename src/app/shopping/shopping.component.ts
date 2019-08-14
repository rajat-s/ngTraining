import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
ingredients:Ingredient[] = [
new Ingredient("Apples",5),
new Ingredient("Tomato",5)
];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
