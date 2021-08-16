import { Component, HostListener } from '@angular/core';

declare var fastspring: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fastspring-demo';

  @HostListener('window:onFSPopupClosed', ['$event.detail'])
  onFSPopupClosed(detail: any) {
    console.log(detail)
    if (detail && detail.orderReference && detail.orderReference.id) {
      // Payment done successfull
    }
  }

  popupStoreFront(itemIdentifier: string): void {
    fastspring.builder.push({
      reset: true,
      products: [
        { path: itemIdentifier, quantity: 1 }
      ],
      checkout: true,
      tags: {
        emailId: 'abc@gmail.com',
        userId: 'HJS678HJ'
      }
    });
  }
}
