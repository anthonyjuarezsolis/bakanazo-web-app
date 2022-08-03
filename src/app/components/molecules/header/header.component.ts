import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userLogged: any;

  constructor(public router: Router) {}

  ngOnInit() {
    this.userLogged = JSON.parse(localStorage.getItem('user'));
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  toLogout() {
    this.userLogged = null;
    localStorage.clear();
  }
}
