import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  // transform(searchValue: String): any {
  //   if (searchValue.length > 0) {
  //     let str = "";
  //     for (let i = 0; i < searchValue.length; i++) {
  //       if (i % 2 == 0) {
  //         str = str + searchValue[i].toUpperCase();
  //       }
  //       else{
  //         str = str + searchValue[i].toLowerCase();
  //       }
  //     }
  //     return str;
  //   }
  // }
  transform(values: any, str: String): any {
    if (!str) {
      return values;
    }
    else {
      values.forEach(ele=>{
        delete ele.edit;
      })
      return values.filter(each => {
        var rval = false;
        Object.keys(each).forEach( function(key) {
          if(!rval){
          rval = (each[key].toLowerCase().includes(str).toLowerCase());
          console.log(rval);
          }
        });
        return rval;
      });
    }
  }
}
