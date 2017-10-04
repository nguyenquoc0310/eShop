import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {ActivatedRoute} from '@angular/router';

const GET_ADMIN_URL = 'product/type/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAdmin: boolean;
  url: string;

  constructor(private cartService: CartService,
              private route: ActivatedRoute) {
    this.url = this.route.snapshot.url.join('/');
    this.cartService.empty();
  }

  ngOnInit(): void {
    if (this.url.includes(GET_ADMIN_URL)) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

}
