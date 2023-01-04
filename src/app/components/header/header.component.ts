import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  switch: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeSwitch(): void {
    this.switch = !this.switch;
  }
}
