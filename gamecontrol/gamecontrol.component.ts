import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() initiateEvent = new EventEmitter<number>();
  increment;
  startNum = 0;

  constructor() { }

  ngOnInit() {
  }

  // start button
  onStart() {
    this.increment = setInterval(() => {
      this.initiateEvent.emit(this.startNum + 1);
      this.startNum++;
    }, 1000);
  }

  // stop button
  onStop() {
    clearInterval(this.increment);
  }
}
