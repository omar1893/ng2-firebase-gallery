// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyBpR6vj-QNWC6tJlmrfsT0mi4NqFILp9zs',
    authDomain: 'ng2-gallery.firebaseapp.com',
    databaseURL: 'https://ng2-gallery.firebaseio.com',
    projectId: 'ng2-gallery',
    storageBucket: '',
    messagingSenderId: '79878667145'
  }
};
