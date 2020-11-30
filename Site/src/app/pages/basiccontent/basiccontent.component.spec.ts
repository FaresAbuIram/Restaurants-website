import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiccontentComponent } from './basiccontent.component';

describe('BasiccontentComponent', () => {
  let component: BasiccontentComponent;
  let fixture: ComponentFixture<BasiccontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasiccontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiccontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
