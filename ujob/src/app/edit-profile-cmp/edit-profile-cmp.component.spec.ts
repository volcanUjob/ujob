import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileCmpComponent } from './edit-profile-cmp.component';

describe('EditProfileCmpComponent', () => {
  let component: EditProfileCmpComponent;
  let fixture: ComponentFixture<EditProfileCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
