import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersListComponent } from './promoters-list.component';

describe('PromotersListComponent', () => {
  let component: PromotersListComponent;
  let fixture: ComponentFixture<PromotersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
