import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-block',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.scss']
})
export class TopBlockComponent implements OnInit {
  @Input() layout: any;

  constructor() { }

  ngOnInit(): void {
  }

}
