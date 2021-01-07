import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfUserComponent } from './prof-user.component';

describe('ProfUserComponent', () => {
  let component: ProfUserComponent;
  let fixture: ComponentFixture<ProfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
