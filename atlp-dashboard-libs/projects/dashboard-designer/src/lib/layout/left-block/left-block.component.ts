import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-block',
  templateUrl: './left-block.component.html',
  styleUrls: ['./left-block.component.scss']
})
export class LeftBlockComponent implements OnInit {
   @Input() layout: any;
  constructor() { }

  ngOnInit(): void {
  }

}
