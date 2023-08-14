import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCatComponent } from './car-cat.component';

describe('CarCatComponent', () => {
  let component: CarCatComponent;
  let fixture: ComponentFixture<CarCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
