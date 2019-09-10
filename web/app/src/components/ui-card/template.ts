import { html } from 'lit-element';
import { UiCard } from './index';

export default function template(this: UiCard) {
	return html`
		<p>${this.card.text}</p>
	`;
}
