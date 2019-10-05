import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }
  data = {};
  ngOnInit() {
    this.getData(event)
  }
  getData(event:Object) {
    console.log(event);
    this.data = event;
  }
}
