import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoComponent } from './bigo.component';

describe('BigoComponent', () => {
  let component: BigoComponent;
  let fixture: ComponentFixture<BigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
