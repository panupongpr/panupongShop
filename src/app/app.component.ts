import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
// Explicit
private mainTitle: string;
constructor() {}

      ngOnInit(): void {
  
      this.mainTitle = 'This is app Component'
 
}


}// Main Class
