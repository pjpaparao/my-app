import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Demo } from '../demo.model';
import { User } from '../user.model';
import { Address } from '../address.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = { "address": {} };
  @Input() childFormData: any;
  @Output() event = new EventEmitter<Object>();

  l

  demo: Demo[];
  constructor(public util: UserService) {
    console.log("i am rg");
  }

  ngOnInit() {
    // this.util.getAllUsers().subscribe(res => {
    // console.log(res);
    // this.demo = res;
    // this.demo.forEach(ele => {
    // console.log(ele.id + " " + ele.employee_age + " " + ele.employee_name + 
    //       " " + ele.employee_salary + " " + ele.profile_image);

    // 

  }
  register() {

    this.user = <User>this.user;
    console.log(this.user);
  }
  send(){
    this.event.emit(this.user);
    console.log(this.childFormData);
    
  }
}
