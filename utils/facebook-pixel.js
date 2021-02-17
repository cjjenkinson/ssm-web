import ReactPixel from 'react-facebook-pixel';

const FB_PIXEL_ID__VISITORS = '1797357210429458';
const FB_PIXEL_ID__MEMBERS = '730210177667530';

export const initFacebookPixel = () => {
  ReactGA.initialize(FB_PIXEL_ID__VISITORS)
}

export const trackPageView = () => {
  ReactGA.pageView(window.location.pathname)
}

export const trackEvent = (event = '', data = '') => {
  if (event && data) {
    ReactGA.track({ event, data })
  }
}

export const trackMembersEvent = (event = '', data = '') => {
  if (event && data) {
    ReactGA.trackSingle(FB_PIXEL_ID__MEMBERS, event, data)
  }
}