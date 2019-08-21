import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  parentClick: Subject<void> = new Subject<void>();


  onParentClick(i) {
    this.parentClick.next(i);
  }
}
