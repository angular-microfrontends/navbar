import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRouteComponent } from './empty-route.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('EmptyRouteComponent', () => {
  let component: EmptyRouteComponent;
  let fixture: ComponentFixture<EmptyRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyRouteComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
