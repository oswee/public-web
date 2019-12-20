import { customElement } from 'lit-element';
import UniversalRouter from 'universal-router';
import { RootState } from './store';
// import { connect } from './store/connect';
import { connect } from 'pwa-helpers';
import store from './store';

@customElement('app-router')
export default class AppRouter extends connect(store)(HTMLElement) {
    private routes = [
      {
        path: '/',
        action: () => '<h1>Home</h1>',
      },
      {
        path: '/foo',
        action: () => console.log('checking child routes for /foo'),
        children: [
          {
            path: '',
            action: () => '<h1>Foo</h1>',
          },
          {
            path: '/:id',
            action: (context : any) => `<h1>Foo ${context.params.id}</h1>`,
          },
        ],
      },
    ]

    private router : UniversalRouter

    constructor() {
      super()
      this.attachShadow({ mode: 'open' });
      this.router = new UniversalRouter(this.routes);
      console.log('Router');
    }

    shouldUpdateProps(state : RootState) : boolean {
      return this.path !== state.router.pathname
    }

    mapStateToProps(state : RootState) : any {
      return {
        path: state.router.pathname
      }
    }

    private _path : string

    get path() : string { return this._path }
    set path(val : string) { this._path = val, this.render() }

    render() {
      this.router.resolve(this._path).then(html => this.shadowRoot.innerHTML = html)
    }
}

declare global {
	interface HTMLElementTagNameMap {
		'app-router': AppRouter;
	}
}