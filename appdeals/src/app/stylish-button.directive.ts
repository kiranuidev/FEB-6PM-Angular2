import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[stylishButton]'
})
export class StylishButtonDirective {

  constructor(private element:ElementRef) {

   }
   @HostListener('click',['$event.target',"test"])
   onClickEvent(evt){
     
     console.log(evt);
     this.element.nativeElement.className="btn btn-danger";
   }

}
