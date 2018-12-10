import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // Explicit 
  private categoryTitle: string;
  private shopMember: string;

  constructor() { }

  ngOnInit() {

    this.categoryTitle = 'Section Category';

  } //ngOnInit Fuction

  addMember(memberString: string) {

    console.log('addMember Work')

    this.shopMember = memberString;

    alert('you Add ==>' + this.shopMember);


  } // addMember

} // Main Class
