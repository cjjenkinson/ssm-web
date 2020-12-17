const title = 'Self Sourced Man - Raise your wellbeing standards';
const description =
  'Join a community of conscious men improving their sexuality, body and mental health'

const SEO = {
  title,
  description,
  canonical: 'https://selfsourcedman.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://selfsourcedman.com',
    title,
    description,
    images: [
      {
        url: 'https://selfsourcedman.com/og.png',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  },
  twitter: {
    handle: '@selfsourcedman',
    site: '@selfsourcedman',
    cardType: 'summary_large_image'
  }
};

export default SEO;
