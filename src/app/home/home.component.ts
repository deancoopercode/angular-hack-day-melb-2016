import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    Name in the home component: {{name}}
    <button (click)="clicked(student.id)">Click me</button>
  
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() name: string;
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.onClick.emit(this.name);
  }

}
