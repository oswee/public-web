import './polyfill';
import SystemShell from './ui/containers/system-shell';
import AppRouter from './router';

import './ui/scss/main.scss';
// import './containers/system-shell';
// import '../src/containers/socket-example-page';
// import './routes/app-home';
// import './routes/app-signup';
// import './routes/app-signin';
// import './routes/app-restore-password';
// import './routes/app-marketplace';
// import './routes/app-services';
// import './routes/app-shipping';
// import './routes/app-not-found';
// import './routes/app-apps';
// import './routes/app-route-planner';

function bootstrap() {
  new SystemShell();
  new AppRouter();
}

declare global {
  interface Window {
    WebComponents: any;
  }
}

if (window.WebComponents && window.WebComponents.ready) {
  bootstrap();
} else {
  window.addEventListener('WebComponentsReady', bootstrap);
}
