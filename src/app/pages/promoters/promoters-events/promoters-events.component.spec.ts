import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersEventsComponent } from './promoters-events.component';

describe('PromotersEventsComponent', () => {
  let component: PromotersEventsComponent;
  let fixture: ComponentFixture<PromotersEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotersEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
