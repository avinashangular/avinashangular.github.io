import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqHomeComponent } from './mcq-home.component';

describe('McqHomeComponent', () => {
  let component: McqHomeComponent;
  let fixture: ComponentFixture<McqHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McqHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McqHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
