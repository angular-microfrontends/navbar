import { Component, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SINGLE_SPA_PROPS, SingleSpaProps } from './single-spa-props';

@Component({
  selector: 'navbar-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-mfe-navbar';
  protected singleSpaProps: SingleSpaProps;
  constructor(@Inject(SINGLE_SPA_PROPS) singleSpaProps: SingleSpaProps) {
    this.singleSpaProps = singleSpaProps;
  }
}
