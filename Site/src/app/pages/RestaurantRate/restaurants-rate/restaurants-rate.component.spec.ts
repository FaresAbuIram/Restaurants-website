import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsRateComponent } from './restaurants-rate.component';

describe('RestaurantsRateComponent', () => {
  let component: RestaurantsRateComponent;
  let fixture: ComponentFixture<RestaurantsRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
