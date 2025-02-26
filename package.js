Package.describe({
  name: 'zodern:melte-compiler',
  version: '1.1.0',
  summary: 'Compiler used by zodern:melte',
  git: 'https://github.com/zodern/melte-compiler.git',
  documentation: 'README.md'
});

Npm.depends({
  'svelte-hmr': '0.14.9',
  'find-up': '3.0.0',
  htmlparser2: '3.10.1',
  'postcss': '7.0.17',
  'source-map': '0.5.6',
  'recast': '0.20.5',
  'periscopic': '2.0.2',
  'acorn': '8.6.0',
  '@babel/parser': '7.4.3'
});

Package.onUse(function (api) {
  api.versionsFrom('1.8.1');
  api.use('ecmascript@0.12.7');
  api.use('caching-compiler@1.2.1', 'server');
  api.use('babel-compiler@7.3.4', 'server');

  api.mainModule('hmr-runtime.js', 'client', { lazy: true });
});
