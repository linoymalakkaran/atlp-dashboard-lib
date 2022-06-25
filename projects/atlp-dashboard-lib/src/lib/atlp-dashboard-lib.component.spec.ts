import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlpDashboardLibComponent } from './atlp-dashboard-lib.component';

describe('AtlpDashboardLibComponent', () => {
  let component: AtlpDashboardLibComponent;
  let fixture: ComponentFixture<AtlpDashboardLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlpDashboardLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlpDashboardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
