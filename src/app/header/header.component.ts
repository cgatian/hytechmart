import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ht-header',
  template: `
    <div class="toolbar">
        <span>Welcome To HyTech Mart</span>
    </div>
  `,
  styles: [`
    .toolbar {
      background-color: #e91e63;;
      color: white;
      font-size: 24px;
      padding: 20px;
    }

  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
