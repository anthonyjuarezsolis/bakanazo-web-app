import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  tabs = [
    { name: 'first', imgDir: './assets/img/bg-1.png' },
    { name: 'second', imgDir: './assets/img/bg-2.png' },
    { name: 'third', imgDir: './assets/img/bg-3.png' },
    { name: 'four', imgDir: './assets/img/bg-4.png' },
  ];

  selected = new FormControl(0);

  constructor() {}

  before() {
    if (this.selected.value > 0) {
      this.selected.setValue(this.selected.value - 1);
    } else if (this.selected.value <= 0) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }
  after() {
    if (this.selected.value < this.tabs.length - 1) {
      this.selected.setValue(this.selected.value + 1);
    } else if (this.selected.value == this.tabs.length - 1) {
      this.selected.setValue(this.selected.value - (this.tabs.length - 1));
    }
  }
}
