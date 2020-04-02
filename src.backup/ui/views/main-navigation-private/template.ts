import { html } from 'lit-element';
import '@my-sandbox/uia-pill';
import { MainNavigationPrivate } from './index';
import { Grid } from '../../assets/svg';
import '../main-launcher';

export default function template(this: MainNavigationPrivate) {
  return html`
    <button
      @click="${this.toggleLauncher}"
      id="launcher"
      class="launcher"
      title="Open Launcher"
    >
      ${Grid()}
    </button>
    <uia-pill text="Beta"></uia-pill>
    ${this.launcherIsVisible
      ? html`
          <main-launcher></main-launcher>
        `
      : ''}
  `;
}
