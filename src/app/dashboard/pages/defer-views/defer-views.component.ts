import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-defer-options',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>defer-views works!</p>`,
    styles: `
    :host {
      display: block;
    }
  `,
})
export default class DeferViewsComponent { }
