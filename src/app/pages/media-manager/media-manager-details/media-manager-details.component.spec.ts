import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaManagerDetailsComponent } from './media-manager-details.component';

describe('MediaManagerDetailsComponent', () => {
  let component: MediaManagerDetailsComponent;
  let fixture: ComponentFixture<MediaManagerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaManagerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
