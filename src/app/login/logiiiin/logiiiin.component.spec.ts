import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiiiinComponent } from './logiiiin.component';

describe('LogiiiinComponent', () => {
  let component: LogiiiinComponent;
  let fixture: ComponentFixture<LogiiiinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogiiiinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogiiiinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
