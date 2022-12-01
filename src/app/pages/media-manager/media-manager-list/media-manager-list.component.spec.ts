import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaManagerListComponent } from './media-manager-list.component';

describe('MediaManagerListComponent', () => {
  let component: MediaManagerListComponent;
  let fixture: ComponentFixture<MediaManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaManagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
