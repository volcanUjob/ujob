import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpRoomComponent } from './cmp-room.component';

describe('CmpRoomComponent', () => {
  let component: CmpRoomComponent;
  let fixture: ComponentFixture<CmpRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
