import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProgrammComponent } from './about-programm.component';

describe('AboutProgrammComponent', () => {
  let component: AboutProgrammComponent;
  let fixture: ComponentFixture<AboutProgrammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutProgrammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProgrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
