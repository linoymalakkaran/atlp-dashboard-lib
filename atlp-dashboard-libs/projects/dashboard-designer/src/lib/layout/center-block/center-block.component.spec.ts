import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterBlockComponent } from './center-block.component';

describe('CenterBlockComponent', () => {
  let component: CenterBlockComponent;
  let fixture: ComponentFixture<CenterBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
