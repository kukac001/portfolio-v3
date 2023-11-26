import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopStarterComponent } from './desktop-starter.component';

describe('DesktopStarterComponent', () => {
  let component: DesktopStarterComponent;
  let fixture: ComponentFixture<DesktopStarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopStarterComponent]
    });
    fixture = TestBed.createComponent(DesktopStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
