import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { singleSpaAngular } from 'single-spa-angular';
import { SINGLE_SPA_PROPS, SingleSpaPropExtraProps } from './app/single-spa-props';

export const { bootstrap, mount, unmount } = singleSpaAngular<SingleSpaPropExtraProps>({
  bootstrapApplication,
  rootComponent: AppComponent,
  appConfig,
  propsInjectionToken: SINGLE_SPA_PROPS,
});