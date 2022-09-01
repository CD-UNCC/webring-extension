import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Modern Webring';
  location: string;

  constructor() {
    this.location = window.location.toString()
  }

}
