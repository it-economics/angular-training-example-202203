import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() name: string = "";
  // @Input() names: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // displayName(): string {
  //   if (this.name) {
  //     return this.name;
  //   }
  //   return "World";
  // }
}
