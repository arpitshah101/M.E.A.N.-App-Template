import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
