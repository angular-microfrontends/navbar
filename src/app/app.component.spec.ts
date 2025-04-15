import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SingleSpaProps, SINGLE_SPA_PROPS } from './single-spa-props'
import * as singleSpa from 'single-spa';

describe('AppComponent', () => {
  beforeEach(async () => {
    const props: SingleSpaProps = {
      favoriteDog: "Franklin is a good boy",
      mountParcel: singleSpa.mountRootParcel,
      name: "test",
      singleSpa
    }

    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [provideExperimentalZonelessChangeDetection(), {
        provide: SINGLE_SPA_PROPS,
        useFactory: () => props
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links: (string | null)[] = [];
    compiled.querySelectorAll('a').forEach(a => {
      links.push(a.textContent!.trim())
    });
    expect(links).toEqual(["Home", "Rate Doggos", "View Dogs"]);
  });
});
