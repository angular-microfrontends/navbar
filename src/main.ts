import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';
import { chooseDomElementGetter } from 'dom-element-getter-helpers'

let appRef: ApplicationRef

export async function bootstrap() {
  console.log('bootstrapping');
}

export async function mount(props: any) {
  console.log('mounting', props);
  const domElement = chooseDomElementGetter({}, props)();
  const rootElement = document.createElement('navbar-root')
  domElement.appendChild(rootElement);
  appRef = await bootstrapApplication(AppComponent, appConfig)
  return appRef;
}

export async function unmount() {
  console.log('unmounting');
  appRef.destroy();
}
