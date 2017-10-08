import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';

const GET_ADMIN_URL = '/admin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAdmin: boolean;
  url: string;
  cartCnt: Number = 0;

  constructor(private cartService: CartService) {
    this.cartService.empty();
  }

  ngOnInit(): void {
    this.url = window.location.href;
    if (this.url.includes(GET_ADMIN_URL)) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  changeActivity() {
    console.log('11212121212');
  }
}
