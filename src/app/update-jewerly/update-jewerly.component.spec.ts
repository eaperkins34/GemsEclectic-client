import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJewerlyComponent } from './update-jewerly.component';

describe('UpdateJewerlyComponent', () => {
  let component: UpdateJewerlyComponent;
  let fixture: ComponentFixture<UpdateJewerlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJewerlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJewerlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
