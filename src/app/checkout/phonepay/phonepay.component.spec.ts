import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonepayComponent } from './phonepay.component';

describe('PhonepayComponent', () => {
  let component: PhonepayComponent;
  let fixture: ComponentFixture<PhonepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonepayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
