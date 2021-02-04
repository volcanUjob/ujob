import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRoomComponent } from './login-room.component';

describe('LoginRoomComponent', () => {
  let component: LoginRoomComponent;
  let fixture: ComponentFixture<LoginRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
