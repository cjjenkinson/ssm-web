const title = 'Self Sourced Man';
const description =
  'The tool kit for an effective semen retention practice. Improve your wellbeing, unlock more energy to create the life you want to live.';


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
