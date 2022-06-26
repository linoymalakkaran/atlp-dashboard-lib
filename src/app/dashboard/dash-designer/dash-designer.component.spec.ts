import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDesignerComponent } from './dash-designer.component';

describe('DashDesignerComponent', () => {
  let component: DashDesignerComponent;
  let fixture: ComponentFixture<DashDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashDesignerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
