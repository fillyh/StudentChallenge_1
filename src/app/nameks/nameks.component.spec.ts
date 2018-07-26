import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameksComponent } from './nameks.component';

describe('NameksComponent', () => {
  let component: NameksComponent;
  let fixture: ComponentFixture<NameksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
