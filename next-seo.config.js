const title = 'Self Sourced Man | Unleash your masculine potential';
const description =
  'Self Sourced Man is community for men practicing sexual self mastery through techniques like semen retention, sacred sexuality and energy work.';

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
