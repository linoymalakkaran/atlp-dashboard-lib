import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.scss']
})
export class RightBlockComponent implements OnInit {
  @Input() layout: any;

  constructor() { }

  ngOnInit(): void {
  }

}
