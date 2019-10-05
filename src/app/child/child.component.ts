import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childVar: any;
  @Output() event = new EventEmitter<string>();
  parentVar = "";
  constructor() { }

  changeVal(parentVar) {
    this.event.emit(this.parentVar)
    this.childVar = parentVar
  }

  ngOnInit() {
  }

}
