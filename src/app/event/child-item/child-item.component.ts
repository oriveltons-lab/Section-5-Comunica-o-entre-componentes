import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss']
})
export class ChildItemComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
  }

}
