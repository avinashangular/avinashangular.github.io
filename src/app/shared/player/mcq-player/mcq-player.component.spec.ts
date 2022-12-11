import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqPlayerComponent } from './mcq-player.component';

describe('McqPlayerComponent', () => {
  let component: McqPlayerComponent;
  let fixture: ComponentFixture<McqPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McqPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McqPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
