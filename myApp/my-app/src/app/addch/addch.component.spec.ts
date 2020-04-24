import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchComponent } from './addch.component';

describe('AddchComponent', () => {
  let component: AddchComponent;
  let fixture: ComponentFixture<AddchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
