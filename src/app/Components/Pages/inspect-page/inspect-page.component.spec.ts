import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectPageComponent } from './inspect-page.component';

describe('InspectPageComponent', () => {
  let component: InspectPageComponent;
  let fixture: ComponentFixture<InspectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
