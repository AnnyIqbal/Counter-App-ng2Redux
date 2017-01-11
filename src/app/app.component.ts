import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux Counter App!';
  initialState: number = 0; // initial state

// actions
  increment() {
    this.initialState++;
    // store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.initialState--;
    // store.dispatch({ type: 'decrement' });
  }
}