const root = (component, bundle, initialState, deviceType) =>
  `<!doctype html>
        <html>
        <head>
        <script>window._PRELOADED_STATE = ${JSON.stringify({
          initialState,
        })}</script>
        <link rel="stylesheet" type="text/css" href="/static/${bundle}.${deviceType}.css" />
        </head>
        <body>
        <div id="root">${component}</div>
        <script src="/static/${bundle}.${deviceType}.js"></script>
      </body>
      </html>`;

export default root;
