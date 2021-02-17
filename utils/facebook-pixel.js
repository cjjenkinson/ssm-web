import ReactPixel from 'react-facebook-pixel';

const FB_PIXEL_ID__MEMBERS = '730210177667530';

export const trackEvent = (event = '', data = '') => {
  if (event && data) {
    ReactPixel.track({ event, data })
  }
}

export const trackMembersEvent = (event = '', data = '') => {
  if (event && data) {
    ReactPixel.trackSingle(FB_PIXEL_ID__MEMBERS, event, data)
  }
}