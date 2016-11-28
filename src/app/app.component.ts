import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>2015 US Census Data Visualized</h1>
    <div class="visualization"></div>
    <div class="visualization"></div>
    <div class="visualization"></div>
  `
})
export class AppComponent {
  title = 'app works!';
}
