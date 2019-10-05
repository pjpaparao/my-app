import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my-app';
  title:any;
  imageUrl = "assets/road.jpg";
  formpopjo = {};
  formArray = [];
  // genders=["female","male","other"];
  validateFormPojo(formpopjo) {
    console.log(formpopjo);
    formpopjo.edit = false;
    this.title=formpopjo;
    this.formArray.push(formpopjo);
    this.reset();
  }
  genders = [{ "gend": "male", "enable": false }, { "gend": "female", "enable": false }];

  update(i) {
    this.formArray[i].edit = true
  }
  save(each, i) {
    this.formArray[i] = each;
    this.formArray[i].edit = false;
  }
  delete(i) {
    this.formArray.splice(i, 1);
  }

  validate() {

    Object.keys(this.formpopjo).forEach(element => {
      if (this.formpopjo[element] != "undefined") {
        return false;
      }
    });

  }

  reset() {
    this.formpopjo = {};
    this.genders.forEach(each => { delete each.enable });
  }

  getData(event:string){
    this.title=event;
  }

  constructor(public util:UserService) { console.log("i am rg");
}


}