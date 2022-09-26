import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpForFreeComponent } from './sign-up-for-free.component';

describe('SignUpForFreeComponent', () => {
  let component: SignUpForFreeComponent;
  let fixture: ComponentFixture<SignUpForFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpForFreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpForFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
