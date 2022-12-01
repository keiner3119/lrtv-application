import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersDetailsComponent } from './promoters-details.component';

describe('PromotersDetailsComponent', () => {
  let component: PromotersDetailsComponent;
  let fixture: ComponentFixture<PromotersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
