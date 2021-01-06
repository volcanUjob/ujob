import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeUserComponent } from './resume-user.component';

describe('ResumeUserComponent', () => {
  let component: ResumeUserComponent;
  let fixture: ComponentFixture<ResumeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
