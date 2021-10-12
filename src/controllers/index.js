import React from 'react';
import DeviceDetector from 'node-device-detector';
import { getDataProductListPage } from '../server/services';
import PLPMobile from '../pages/plp/plp.mobile';
import PLPDesktop from '../pages/plp/plp.desktop';
import ReactDOMServer from 'react-dom/server';

const detector = new DeviceDetector();

/**
 * Fetch Site data
 */
exports.fetchData = (req, res, next) => {
  getDataProductListPage(req)
    .get()
    .then((response) => {
      res.locals.initialState = response.data;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

/**
 * Render page
 */
exports.render = (template, page) =>
  function render(req, res) {
    const initialState = res.locals.initialState;
    const userAgent = req.headers['user-agent'];
    const deviceDetection = detector.detect(userAgent);
    res.locals.initialState.deviceType = deviceDetection.device.type;

    const isDesktop = initialState.deviceType === 'desktop';

    const deviceType = isDesktop ? 'desktop' : 'mobile';

    const Page = (props) =>
      isDesktop ? <PLPDesktop {...props} /> : <PLPMobile {...props} />;

    const component = ReactDOMServer.renderToString(
      <Page initialState={initialState} />
    );

    /**
     * Render View
     */
    res.send(template(component, page, initialState, deviceType));
  };
