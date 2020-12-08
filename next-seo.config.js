const title = 'Self Sourced - Raise your wellbeing standards';
const description =
  'Join a tribe of men mastering their sexual, body and mental health to become the best man they can be.';

const SEO = {
  title,
  description,
  canonical: 'https://selfsourced.coach',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://selfsourced.coach',
    title,
    description,
    images: [
      {
        url: 'https://selfsourced.coach/og.png',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  },
  twitter: {
    handle: '@selfsourced',
    site: '@selfsourced',
    cardType: 'summary_large_image'
  }
};

export default SEO;
