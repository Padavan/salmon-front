export default (config, env, helpers) => {
  config.devServer.proxy = [
    {
      path: '/api/**',
      target: 'http://localhost:3000/',
      // ...any other stuff...
    }
  ];
}