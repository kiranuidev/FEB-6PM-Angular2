import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlinker]'
})
export class BlinkerDirective {

  constructor(element: ElementRef) {
    let interval = setInterval(() => {
      let color = element.nativeElement.style.color;
      element.nativeElement.style.color
        = (color === '' || color === 'black') ? 'red' : 'black';
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }
}
