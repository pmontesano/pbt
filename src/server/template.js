const root = (component, bundle, initialState, deviceType) =>
  `<!doctype html>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script>window._PRELOADED_STATE = ${JSON.stringify({
          initialState,
        })}</script>
        <link rel="stylesheet" type="text/css" href="/${bundle}.${deviceType}.css" />
        </head>
        <body>
        <div id="root">${component}</div>
        <script src="/${bundle}.${deviceType}.js"></script>
      </body>
      </html>`;

export default root;
