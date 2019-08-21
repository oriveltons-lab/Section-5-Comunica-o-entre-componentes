import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/input-binding/client.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {

  @Input() parentClick: Subject<void>;

  clickCount = 0;

  constructor() {}
  ngOnInit() {
    this.parentClick.subscribe((i) => this.incrementValue(i));
  }

  incrementValue(i?) {
    console.log(i);
    
    this.clickCount = i;
  }

}
