import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherregistrationComponent } from './teacherregistration.component';

describe('TeacherregistrationComponent', () => {
  let component: TeacherregistrationComponent;
  let fixture: ComponentFixture<TeacherregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
