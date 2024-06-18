import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'user-loader-component',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>user-loader-component works!</p>`,
    styles: `
    :host {
      display: block;
    }
  `
})
export class UserLoaderComponentComponent { }
