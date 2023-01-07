import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPlayerComponent } from './html-player.component';

describe('HtmlPlayerComponent', () => {
  let component: HtmlPlayerComponent;
  let fixture: ComponentFixture<HtmlPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
