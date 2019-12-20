import { LitElement, customElement, html, property } from 'lit-element';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener, push } from '../../store/modules/router';

import { connect } from 'pwa-helpers';
// import { connect } from './store/connect';
import store, { RootState, getSession } from '../../store';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import template from './template';


@customElement('system-shell')
export default class SystemShell extends connect(store)(LitElement) {
		public static styles = [ GlobalStyle, Style ];

		@property({ type: String}) lastUsedApp = 'app-home'
		@property({ type: Object }) session = {
			live: false,
			email: '',
		};

		stateChanged(state: RootState) {
			this.session = getSession(state);
			if (this.session.live === true) {
				store.dispatch(push('/'));
			}
		}

		protected render() {
			return template.call(this);
		}

		connectedCallback() {
			super.connectedCallback();
			if (localStorage.getItem('lastUsedApp') !== null) {
				this.lastUsedApp = localStorage.getItem('lastUsedApp');
			}
			console.log("Last Used App:", this.lastUsedApp);
			// store.dispatch(initializeWeSocketsChannel());
		}

		disconnectedCallback() {
			super.disconnectedCallback();
		}

	}

declare global {
	interface HTMLElementTagNameMap {
		'system-shell': SystemShell;
	}
}