import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigneCmpComponent } from './signe-cmp.component';

describe('SigneCmpComponent', () => {
  let component: SigneCmpComponent;
  let fixture: ComponentFixture<SigneCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigneCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigneCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
