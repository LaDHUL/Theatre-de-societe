import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipLineComponent } from './membership-line.component';

describe('MembershipLineComponent', () => {
  let component: MembershipLineComponent;
  let fixture: ComponentFixture<MembershipLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
