import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservablesComponent } from './test-observables.component';

describe('TestObservablesComponent', () => {
  let component: TestObservablesComponent;
  let fixture: ComponentFixture<TestObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
