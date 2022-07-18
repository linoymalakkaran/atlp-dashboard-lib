import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  @Input() editMode: boolean;

  public readonly LayoutDirection = AngularResizeElementDirection;
  public layout: any = {left:{show: true, slideOut: false}, right:{show: true, slideOut: false}, top:{show: true,slideOut: false}, bottom:{show: true, slideOut: false}, center:{show: true, slideOut: false}, resizeFn$: new Subject()};

  @ViewChild('leftBlock',  {read: ElementRef})
  public readonly leftBlockEle: any;

  constructor() { }

  ngOnInit(): void { 
   this.layout.toggleLeft = ()=>{ 
     this.toggleLeft();
   };  
   
   this.layout.toggleRight = ()=>{ 
    this.toggleRight();
  };

  }

  ngOnDestroy(): void {
    this.layout.resizeFn$.complete();
  }

  public onResize(evt: AngularResizeElementEvent, _block: any): void {
    this.layout[_block].width = evt.currentWidthValue;
    this.layout[_block].height = evt.currentHeightValue;
    this.layout[_block].top = evt.currentTopValue;
    this.layout[_block].left = evt.currentLeftValue;
  }

  public resizeEnd(evt: AngularResizeElementEvent, _block: any): void {
    this.layout.resizeFn$.next();
  }

  toggleLeft(): void{
    this.layout.left.show = !this.layout.left.show;
    this.layout.resizeFn$.next();
  }

  toggleRight(): void{
    this.layout.right.show = !this.layout.right.show;
    this.layout.resizeFn$.next();
  }

}