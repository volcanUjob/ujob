import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilUserComponent } from './my-profil-user.component';

describe('MyProfilUserComponent', () => {
  let component: MyProfilUserComponent;
  let fixture: ComponentFixture<MyProfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfilUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
