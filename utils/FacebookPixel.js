import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
export const FACEBOOK_PIXEL_ID__MEMBERS = process.envNEXT_PUBLIC_FACEBOOK_PIXEL_ID__MEMBERS;

export const useFacebookPixel = () => {
  const [pixel, setPixel] = useState(null);

  useEffect(() => {
    if (!FACEBOOK_PIXEL_ID) return
    
    let fb

    import('react-facebook-pixel')
      .then(module => (fb = module.default))
      .then(() => {
        fb.init(FACEBOOK_PIXEL_ID, {
          autoConfig: true,
          debug: false,
        })
      })

    setPixel(fb);
  }, [])

  return pixel;
}

export const FacebookPixel = () => {
  const router = useRouter();

  useEffect(() => {
    if (!FACEBOOK_PIXEL_ID) return
    let fb

    function onRouteChange(url) {
      fb.pageView()
    }

    import('react-facebook-pixel')
      .then(module => (fb = module.default))
      .then(() => {
        fb.init(FACEBOOK_PIXEL_ID, {
          autoConfig: true,
          debug: false,
        })
        fb.pageView()
      })

    router.events.on('routeChangeComplete', onRouteChange)
    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
    }
  }, [])
  
  return null
}