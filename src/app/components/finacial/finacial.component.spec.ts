import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialComponent } from './finacial.component';

describe('FinacialComponent', () => {
  let component: FinacialComponent;
  let fixture: ComponentFixture<FinacialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinacialComponent]
    });
    fixture = TestBed.createComponent(FinacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
