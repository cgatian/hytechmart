import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ht-footer',
  template: `
      <div class="footer">
          Contact Us Today! (555)-333-4321
      </div>
  `,
  styles: [`
    .footer {
      position: fixed;
      bottom: 0;
      background-color: #e91e63;
      color: white;
      width: 100%;
      text-align: center;
    }

  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
