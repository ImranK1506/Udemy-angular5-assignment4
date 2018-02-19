import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
oddNumbers: number[] = [];
evenNumbers: number[] = [];

  onInitiateEvent(initiatedNum: number) {
    if (initiatedNum % 2 === 0) {
      this.evenNumbers.push(initiatedNum);
    } else {
      this.oddNumbers.push(initiatedNum);
    }
  }
}
