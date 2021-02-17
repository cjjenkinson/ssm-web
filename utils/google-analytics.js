import ReactGA from 'react-ga';

export const GA_TRACKING_ID = 'G-0G914C3B4W';

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
