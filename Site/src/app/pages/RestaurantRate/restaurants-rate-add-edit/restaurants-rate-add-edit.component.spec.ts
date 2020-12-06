import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsRateAddEditComponent } from './restaurants-rate-add-edit.component';

describe('RestaurantsRateAddEditComponent', () => {
  let component: RestaurantsRateAddEditComponent;
  let fixture: ComponentFixture<RestaurantsRateAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsRateAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsRateAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
