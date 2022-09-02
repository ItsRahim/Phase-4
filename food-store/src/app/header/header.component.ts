import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*let burgerIcon = document.querySelector('#burger');
    let navbarMenu = document.querySelector('#nav-links');

    burgerIcon.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active');
    });*/
  }
}
