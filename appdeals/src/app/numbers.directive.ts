import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumbers]'
})
export class NumbersDirective {

  constructor(private element:ElementRef) {

   }
   @HostListener("keypress",['$event.keyCode'])
   onKeyPress(code){
     if(code>=48 &&  code<=57){
       return true;
     }
     else{
       return false;
     }
   }

}
