import { Component } from '@angular/core';

@Component({
  selector: 'app-bidouille',
  imports: [],
  templateUrl: './bidouille.html',
  styleUrl: './bidouille.css',
})
export class Bidouille {
  constructor() {
    console.log(this.direBonjour());
    console.log(this.direBonjour);
  }

  direBonjour(): string {
    return 'Hello';
  }
}
