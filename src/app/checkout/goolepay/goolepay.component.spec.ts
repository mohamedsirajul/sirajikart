import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoolepayComponent } from './goolepay.component';

describe('GoolepayComponent', () => {
  let component: GoolepayComponent;
  let fixture: ComponentFixture<GoolepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoolepayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoolepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
