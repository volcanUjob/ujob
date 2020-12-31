import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilCmpComponent } from './my-profil-cmp.component';

describe('MyProfilCmpComponent', () => {
  let component: MyProfilCmpComponent;
  let fixture: ComponentFixture<MyProfilCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfilCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
