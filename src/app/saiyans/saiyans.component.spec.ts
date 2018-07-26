import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyansComponent } from './saiyans.component';

describe('SaiyansComponent', () => {
  let component: SaiyansComponent;
  let fixture: ComponentFixture<SaiyansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
