import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCharactersComponent } from './db-characters.component';

describe('DbCharactersComponent', () => {
  let component: DbCharactersComponent;
  let fixture: ComponentFixture<DbCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
