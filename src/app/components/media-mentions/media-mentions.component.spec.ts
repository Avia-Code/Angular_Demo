import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMentionsComponent } from './media-mentions.component';

describe('MediaComponent', () => {
  let component: MediaMentionsComponent;
  let fixture: ComponentFixture<MediaMentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaMentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
