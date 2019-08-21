import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/input-binding/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  constructor() { }
  @Input() maria: string;
  ngOnInit() {
  }

  jose(event: Event) {
    console.log('here', event);
  }

}
