import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly chatSocket = new Subject<string>();
  readonly messages = this.chatSocket.pipe(
    scan((messages, message) => [...messages, message], []),
  );
}
