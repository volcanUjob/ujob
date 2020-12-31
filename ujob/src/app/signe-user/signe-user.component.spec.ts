import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigneUserComponent } from './signe-user.component';

describe('SigneUserComponent', () => {
  let component: SigneUserComponent;
  let fixture: ComponentFixture<SigneUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigneUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
