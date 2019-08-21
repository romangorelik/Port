import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoFormComponent } from './bigo-form.component';

describe('BigoFormComponent', () => {
  let component: BigoFormComponent;
  let fixture: ComponentFixture<BigoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
