import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LordIconModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
