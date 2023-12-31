import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalComponent } from './functional.component';

describe('FunctionalComponent', () => {
  let component: FunctionalComponent;
  let fixture: ComponentFixture<FunctionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalComponent]
    });
    fixture = TestBed.createComponent(FunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
