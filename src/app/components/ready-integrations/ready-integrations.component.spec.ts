import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyIntegrationsComponent } from './ready-integrations.component';

describe('ReadyIntegrationsComponent', () => {
  let component: ReadyIntegrationsComponent;
  let fixture: ComponentFixture<ReadyIntegrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyIntegrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
