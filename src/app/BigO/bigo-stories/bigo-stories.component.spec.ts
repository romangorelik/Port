import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigoStoriesComponent } from './bigo-stories.component';

describe('BigoStoriesComponent', () => {
  let component: BigoStoriesComponent;
  let fixture: ComponentFixture<BigoStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigoStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigoStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
