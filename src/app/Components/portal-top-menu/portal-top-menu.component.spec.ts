import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalTopMenuComponent } from './portal-top-menu.component';

describe('PortalTopMenuComponent', () => {
  let component: PortalTopMenuComponent;
  let fixture: ComponentFixture<PortalTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
