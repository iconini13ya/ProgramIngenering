import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlistComponent } from './chlist.component';

describe('ChlistComponent', () => {
  let component: ChlistComponent;
  let fixture: ComponentFixture<ChlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
