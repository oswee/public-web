import { html } from 'lit-element';
import SystemShell from './index';
import '../../views/main-taskbar';

export default function template(this: SystemShell) {
  return html`
    <main-taskbar></main-taskbar>
    <slot></slot>
  `;
}
