import { Component } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {
  title = 'Didn\'t click';
   clicked() {

    this.title = this.title.includes('Clicked') ? 'Clicked again' : 'Clicked';
  }
}
